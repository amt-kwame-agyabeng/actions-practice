const express = require('express');

// Create app setup as a function to make it testable
function setupApp(app) {
  // Middleware to parse JSON bodies
  app.use(express.json());

  // Serve static files from public directory
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

  return app;
}

// Only execute when run directly (not when imported in tests)
if (require.main === module) {
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  setupApp(app);
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = setupApp;