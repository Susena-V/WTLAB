// index.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Initialize the database
const db = new sqlite3.Database('./database.db');

// API to fetch all job listings
app.get('/api/jobs', (req, res) => {
  db.all('SELECT * FROM jobs', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// API to add a new job
app.post('/api/jobs', (req, res) => {
  const { title, description, company, location } = req.body;
  const sql = `INSERT INTO jobs (title, description, company, location) VALUES (?, ?, ?, ?)`;
  db.run(sql, [title, description, company, location], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
