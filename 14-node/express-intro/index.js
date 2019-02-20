const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express.js');
});

app.get('/about', (req, res) => {
  res.send('Goodbye cruel world');
});

app.get('/info', (req, res) => {
  res.json({
    name: 'Groucho',
    hair: 'brown',
    luckyNumber: Math.random()
  });
});

app.listen(3000, () => console.log('Now serving! http://localhost:3000/'));
