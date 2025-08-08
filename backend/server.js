const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const DUMMY_USER = {
  username: "admin",
  password: "test123"
};

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
    res.json({ message: "Login successful", user: { username } });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

app.post('/register', (req, res) => {
  res.status(200).json({ message: "Registration is disabled in prototype." });
});

app.listen(PORT, () => {
  console.log(`🧪 Amin App backend running at http://localhost:${PORT}`);
});
