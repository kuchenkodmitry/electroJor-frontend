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
import cors from 'cors'; // Добавляем cors
import https from 'https'; // Для HTTPS
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

// Security middlewares
app.use(helmet());
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

// Настройка CORS
const corsOptions = {
  origin: [
    'http://localhost:3000', // Локальный фронтенд
    'https://electrotochka34.ru', // Продакшен-домен
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions)); // Применяем CORS с настройками
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Создаем папку для загрузок
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Настройка Multer для загрузки файлов
const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext)
      .replace(/[^a-z0-9]/gi, '_')
      .toLowerCase();
    cb(null, `${base}-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed!'), false);
    }
  },
});

app.use('/uploads', express.static(uploadsDir));

// Validation schemas
const phoneSchema = z.object({ phone: z.string().min(1) });
const postSchema = z.object({
  title: z.string().min(1),
  text: z.string().min(1),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  gallaryUrl: z.array(z.string()).optional(),
});

// Загрузка изображений
app.post('/api/uploads', upload.single('image'), async (req, res) => {
  try {
    const filePath = req.file.path;

    // Оптимизируем изображение без изменения формата
    const optimizedBuffer = await sharp(filePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .toBuffer();

    await fs.promises.writeFile(filePath, optimizedBuffer);

    const relativePath = `/uploads/${path.basename(filePath)}`;
    res.json({ url: relativePath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upload error' });
  }
});

// Инициализация базы данных
let db;
(async () => {
  db = await open({
    filename: path.join(__dirname, 'db.sqlite'),
    driver: sqlite3.Database,
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

// Middleware для проверки авторизации
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.userId = data.id;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Маршруты для аутентификации
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingAdmin = await db.get('SELECT * FROM users LIMIT 1');
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hash = await bcrypt.hash(password, 10);
    const result = await db.run(
      'INSERT INTO users(username, password) VALUES(?, ?)',
      username,
      hash
    );
    const token = jwt.sign({ id: result.lastID }, JWT_SECRET);
    res.json({ token, id: result.lastID, username });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.get('SELECT * FROM users WHERE username = ?', username);
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: 'Wrong password' });

    const token = jwt.sign({ id: user.id }, JWT_SECRET);
    res.json({ token, id: user.id, username: user.username });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Проверить, создан ли администратор
// Поддерживаем старый и новый путь на случай различий в конфигурации фронтенда
app.get(['/api/admin-exists', '/admin-exists'], async (req, res) => {
  try {
    const admin = await db.get('SELECT id FROM users LIMIT 1');
    res.json({ exists: Boolean(admin) });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/me', authMiddleware, async (req, res) => {
  try {
    const user = await db.get(
      'SELECT id, username FROM users WHERE id = ?',
      req.userId
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Сменить пароль администратора
app.put('/api/password', authMiddleware, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await db.get('SELECT * FROM users WHERE id = ?', req.userId);
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isValid = await bcrypt.compare(oldPassword, user.password);
    if (!isValid) return res.status(400).json({ message: 'Wrong password' });

    const hash = await bcrypt.hash(newPassword, 10);
    await db.run('UPDATE users SET password = ? WHERE id = ?', hash, req.userId);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ----------------------- Settings routes -----------------------
app.get('/api/settings/phone', async (req, res) => {
  try {
    const row = await db.get("SELECT value FROM settings WHERE key = 'phone'");
    res.json({ phone: row?.value || '' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/settings/phone', authMiddleware, async (req, res) => {
  try {
    const parsed = phoneSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.message });
    }
    const { phone } = parsed.data;
    await db.run(
      "INSERT INTO settings(key, value) VALUES('phone', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
      phone
    );
    res.json({ phone });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ----------------------- Posts routes -----------------------
app.get('/api/posts', async (req, res) => {
  try {
    const rows = await db.all('SELECT * FROM posts ORDER BY created_at DESC');
    const posts = rows.map((r) => ({
      ...r,
      gallaryUrl: r.gallaryUrl ? JSON.parse(r.gallaryUrl) : [],
    }));
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await db.get('SELECT * FROM posts WHERE id = ?', req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    post.gallaryUrl = post.gallaryUrl ? JSON.parse(post.gallaryUrl) : [];
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/posts', authMiddleware, async (req, res) => {
  try {
    const parsed = postSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.message });
    }
    const { title, text, description = '', imageUrl = '', gallaryUrl = [] } = parsed.data;

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
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.patch('/api/posts/:id', authMiddleware, async (req, res) => {
  try {
    const parsed = postSchema.partial().safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: parsed.error.message });
    }
    const { title = '', text = '', description = '', imageUrl = '', gallaryUrl = [] } = parsed.data;

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
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/posts/:id', authMiddleware, async (req, res) => {
  try {
    const post = await db.get('SELECT * FROM posts WHERE id = ?', req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    await db.run('DELETE FROM posts WHERE id = ?', req.params.id);
    res.json({ message: 'Post deleted', doc: post });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// -------------------------------------------------------------

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

// Запуск сервера
if (process.env.NODE_ENV === 'production') {
  const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/electrotochka34.ru/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/electrotochka34.ru/fullchain.pem'),
  };
  https.createServer(options, app).listen(443, () => {
    console.log('✅ HTTPS server running on port 443');
  });
} else {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}