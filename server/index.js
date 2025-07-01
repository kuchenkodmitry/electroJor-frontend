import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

app.use(express.json());
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
  `);
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
