import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

// Создаем папку для загрузок, если ее нет
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext)
      .replace(/[^a-z0-9]/gi, '_')
      .toLowerCase();
    cb(null, `${base}-${Date.now()}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
    files: 10
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static(uploadsDir));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).end();
  }
  next();
});

let db;
(async () => {
  db = await open({
    filename: path.join(__dirname, 'db.sqlite'),
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    );
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      text TEXT,
      description TEXT,
      imageUrl TEXT,
      gallaryUrl TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );
    CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      phone TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await db.run(
    "INSERT OR IGNORE INTO settings(key, value) VALUES('phone', '+7-909-383-99-46')"
  );
})();

// Auth middleware
function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.userId = data.id;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Auth routes
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const existingAdmin = await db.get('SELECT * FROM users LIMIT 1');
  if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

  const hash = await bcrypt.hash(password, 10);
  const result = await db.run(
    'INSERT INTO users(username, password) VALUES(?, ?)',
    username,
    hash
  );
  const token = jwt.sign({ id: result.lastID }, JWT_SECRET);
  res.json({ token, id: result.lastID, username });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.get('SELECT * FROM users WHERE username = ?', username);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).json({ message: 'Wrong password' });

  const token = jwt.sign({ id: user.id }, JWT_SECRET);
  res.json({ token, id: user.id, username: user.username });
});

app.get('/api/me', authMiddleware, async (req, res) => {
  const user = await db.get(
    'SELECT id, username FROM users WHERE id = ?',
    req.userId
  );
  res.json(user);
});

app.put('/api/password', authMiddleware, async (req, res) => {
  const { oldPassword = '', newPassword = '' } = req.body;
  const user = await db.get('SELECT * FROM users WHERE id = ?', req.userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isValid = await bcrypt.compare(oldPassword, user.password);
  if (!isValid) return res.status(400).json({ message: 'Wrong password' });

  const hash = await bcrypt.hash(newPassword, 10);
  await db.run('UPDATE users SET password = ? WHERE id = ?', hash, req.userId);
  res.json({ message: 'Password updated' });
});

app.get('/api/admin-exists', async (req, res) => {
  const row = await db.get('SELECT 1 FROM users LIMIT 1');
  res.json({ exists: !!row });
});

// Settings routes
app.get('/api/settings/phone', async (req, res) => {
  const row = await db.get("SELECT value FROM settings WHERE key = 'phone'");
  res.json({ phone: row ? row.value : '' });
});

app.put('/api/settings/phone', authMiddleware, async (req, res) => {
  const { phone = '' } = req.body;
  await db.run(
    "INSERT INTO settings(key, value) VALUES('phone', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
    phone
  );
  res.json({ phone });
});

// Feedback routes
app.post('/api/feedback', async (req, res) => {
  const { name = '', phone = '' } = req.body;
  const result = await db.run(
    'INSERT INTO feedback(name, phone) VALUES(?, ?)',
    name,
    phone
  );
  if (TELEGRAM_TOKEN && TELEGRAM_CHAT_ID) {
    try {
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `Новая заявка\nИмя: ${name}\nТелефон: ${phone}`
          })
        }
      );
    } catch (e) {
      console.error('Failed to send Telegram message', e);
    }
  }
  res.status(201).json({ id: result.lastID });
});

app.get('/api/feedback', authMiddleware, async (req, res) => {
  const rows = await db.all('SELECT * FROM feedback ORDER BY created_at DESC');
  res.json(rows);
});

// Posts routes
app.get('/api/posts', async (req, res) => {
  const rows = await db.all('SELECT * FROM posts ORDER BY created_at DESC');
  const posts = rows.map((r) => ({ ...r, gallaryUrl: r.gallaryUrl ? JSON.parse(r.gallaryUrl) : [] }));
  res.json(posts);
});

app.get('/api/posts/:id', async (req, res) => {
  const post = await db.get('SELECT * FROM posts WHERE id = ?', req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  post.gallaryUrl = post.gallaryUrl ? JSON.parse(post.gallaryUrl) : [];
  res.json(post);
});

app.post('/api/posts', authMiddleware, async (req, res) => {
  const { title = '', text = '', description = '', imageUrl = '', gallaryUrl = [] } = req.body;
  const result = await db.run(
    'INSERT INTO posts(title, text, description, imageUrl, gallaryUrl) VALUES(?, ?, ?, ?, ?)',
    title,
    text,
    description,
    imageUrl,
    JSON.stringify(gallaryUrl)
  );
  const post = await db.get('SELECT * FROM posts WHERE id = ?', result.lastID);
  post.gallaryUrl = post.gallaryUrl ? JSON.parse(post.gallaryUrl) : [];
  res.status(201).json(post);
});

app.patch('/api/posts/:id', authMiddleware, async (req, res) => {
  const { title = '', text = '', description = '', imageUrl = '', gallaryUrl = [] } = req.body;
  const exists = await db.get('SELECT id FROM posts WHERE id = ?', req.params.id);
  if (!exists) return res.status(404).json({ message: 'Post not found' });
  await db.run(
    'UPDATE posts SET title = ?, text = ?, description = ?, imageUrl = ?, gallaryUrl = ? WHERE id = ?',
    title,
    text,
    description,
    imageUrl,
    JSON.stringify(gallaryUrl),
    req.params.id
  );
  const post = await db.get('SELECT * FROM posts WHERE id = ?', req.params.id);
  post.gallaryUrl = post.gallaryUrl ? JSON.parse(post.gallaryUrl) : [];
  res.json(post);
});

app.delete('/api/posts/:id', authMiddleware, async (req, res) => {
  const post = await db.get('SELECT * FROM posts WHERE id = ?', req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  await db.run('DELETE FROM posts WHERE id = ?', req.params.id);
  res.json({ message: 'Post deleted', doc: post });
});

// File upload routes
app.post('/api/uploads', authMiddleware, (req, res) => {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(413).json({ message: 'File size too large. Maximum 50MB allowed.' });
        }
        if (err.code === 'LIMIT_FILE_COUNT') {
          return res.status(400).json({ message: 'Too many files uploaded.' });
        }
      }
      console.error('Upload error:', err);
      return res.status(500).json({ message: err.message || 'File upload failed' });
    }

    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const filePath = path.join(req.file.destination, req.file.filename);
      const stats = fs.statSync(filePath);

      // Оптимизируем только большие изображения
      if (stats.size > 1024 * 1024) {
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true })
          .toFile(filePath + '.optimized')
          .then(() => {
            fs.unlinkSync(filePath);
            fs.renameSync(filePath + '.optimized', filePath);
          });
      }

      res.json({
        url: `/uploads/${req.file.filename}`,
        size: stats.size,
        mimetype: req.file.mimetype
      });
    } catch (e) {
      console.error('Image processing error:', e);
      if (req.file) {
        try {
          fs.unlinkSync(path.join(req.file.destination, req.file.filename));
        } catch (unlinkErr) {
          console.error('Failed to delete file:', unlinkErr);
        }
      }
      res.status(500).json({ message: 'Image processing failed' });
    }
  });
});

app.post('/api/uploads/multiple', authMiddleware, (req, res) => {
  upload.array('images', 10)(req, res, async (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(413).json({ message: 'File size too large. Maximum 50MB allowed.' });
        }
        if (err.code === 'LIMIT_FILE_COUNT') {
          return res.status(400).json({ message: 'Too many files uploaded. Maximum 10 files allowed.' });
        }
      }
      return res.status(500).json({ message: err.message || 'Upload failed' });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    try {
      const results = await Promise.all(req.files.map(async (file) => {
        const filePath = path.join(file.destination, file.filename);
        const stats = fs.statSync(filePath);

        if (stats.size > 1024 * 1024) {
          await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 80 })
            .toFile(filePath + '.optimized')
            .then(() => {
              fs.unlinkSync(filePath);
              fs.renameSync(filePath + '.optimized', filePath);
            });
        }

        return {
          url: `/uploads/${file.filename}`,
          size: stats.size,
          mimetype: file.mimetype
        };
      }));

      res.json(results);
    } catch (e) {
      console.error('Batch upload error:', e);
      req.files.forEach(file => {
        try {
          fs.unlinkSync(path.join(file.destination, file.filename));
        } catch (unlinkErr) {
          console.error('Failed to delete file:', unlinkErr);
        }
      });
      res.status(500).json({ message: 'Batch upload failed' });
    }
  });
});

app.delete('/api/uploads/:filename', authMiddleware, (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadsDir, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found' });
  }

  try {
    fs.unlinkSync(filePath);
    res.json({ message: 'File deleted successfully' });
  } catch (err) {
    console.error('Delete file error:', err);
    res.status(500).json({ message: 'Failed to delete file' });
  }
});

// Serve static files
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// Fallback for SPA
app.use((req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});