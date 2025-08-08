const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Use Railway's dynamic port or fallback to 5000 locally
const PORT = process.env.PORT || 5000;

// Dummy user (for prototype)
const DUMMY_USER = {
  username: "admin",
  password: "test123"
};

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
    res.json({ message: "Login successful", user: { username } });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

// Register route (disabled)
app.post('/register', (req, res) => {
  res.status(200).json({ message: "Registration is disabled in prototype." });
});

// Handle all frontend routes (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 XYZ Laboratories backend running on port ${PORT}`);
});

