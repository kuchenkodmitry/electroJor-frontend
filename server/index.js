import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

app.use(express.json());

let db;
(async () => {
  db = await open({
    filename: path.join(__dirname, 'db.sqlite'),
    driver: sqlite3.Database
  });
  await db.exec(`CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
  )`);
})();

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.userId = data.id;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const admin = await db.get('SELECT * FROM users LIMIT 1');
  if (admin) return res.status(400).json({ message: 'Admin already exists' });
  const hash = await bcrypt.hash(password, 10);
  const result = await db.run('INSERT INTO users(username, password) VALUES(?, ?)', username, hash);
  const id = result.lastID;
  const token = jwt.sign({ id }, JWT_SECRET);
  res.json({ token, id, username });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.get('SELECT * FROM users WHERE username=?', username);
  if (!user) return res.status(400).json({ message: 'User not found' });
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).json({ message: 'Wrong password' });
  const token = jwt.sign({ id: user.id }, JWT_SECRET);
  res.json({ token, id: user.id, username: user.username });
});

app.get('/api/me', authMiddleware, async (req, res) => {
  const user = await db.get('SELECT id, username FROM users WHERE id=?', req.userId);
  res.json(user);
});

app.get('/api/admin-exists', async (req, res) => {
  const row = await db.get('SELECT 1 FROM users LIMIT 1');
  res.json({ exists: !!row });
});

// serve frontend build if exists
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
