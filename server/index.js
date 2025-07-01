import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import multer from 'multer';
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
const upload = multer({ dest: path.join(__dirname, 'uploads') });

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
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

// 🔒 Middleware для проверки JWT
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

// 📌 Регистрация (только один админ)
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

// 🔑 Вход
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.get('SELECT * FROM users WHERE username = ?', username);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).json({ message: 'Wrong password' });

  const token = jwt.sign({ id: user.id }, JWT_SECRET);
  res.json({ token, id: user.id, username: user.username });
});

// 👤 Получить информацию о себе
app.get('/api/me', authMiddleware, async (req, res) => {
  const user = await db.get(
    'SELECT id, username FROM users WHERE id = ?',
    req.userId
  );
  res.json(user);
});

// ❓ Проверка наличия админа
app.get('/api/admin-exists', async (req, res) => {
  const row = await db.get('SELECT 1 FROM users LIMIT 1');
  res.json({ exists: !!row });
});

// ----- Settings -----
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

// ----- Feedback -----
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

// ----- Posts CRUD -----
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

app.post('/api/uploads', authMiddleware, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  res.json({ url: `/uploads/${req.file.filename}` });
});

// 🧱 Отдача фронта
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

// 🌐 Fallback для SPA (важно для React Router)
app.use((req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// ▶️ Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
