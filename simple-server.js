const express = require('express');
const path = require('path');

const app = express();
const PORT = 3006;

// Serve static files from the out directory
app.use(express.static(path.join(__dirname, 'out')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
  console.log(`Also try: http://localhost:${PORT}`);
});