const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Moduli API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
