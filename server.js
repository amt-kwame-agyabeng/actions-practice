const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from public directory (if you create one)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to my simple Node.js application');
});

app.get('/api/info', (req, res) => {
  res.json({
    appName: 'Simple Node App',
    version: '1.0.0',
    status: 'running'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});