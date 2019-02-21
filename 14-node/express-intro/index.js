const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const app = express();
app.use(express.static('public'));
app.set('view-engine', 'ejs');


app.get('/', (req, res) => {
  const brothers = 'Groucho Harpo Chico Zeppo Gummo'.split(' ');
  const randomBrother = _(brothers).sample();
  res.render('home.ejs', {randomBrother: randomBrother}); // "Instance variables" -- pass data to a view
});

app.get('/hello/:name', (req, res) => {
  res.render('hello.ejs', {name: req.params.name});
});

app.get('/calculator/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  }

  res.render('calculator.ejs', {answer: answer});
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

// You can use a regular expression instead of a string for a path.
// I'm not sure why you would ever do this.
app.get(/[0-9]/, (req, res) => {
  res.send('you asked for a number');
});

app.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', {trivia: response.data});
  });
});

app.listen(3000, () => console.log('Now serving! http://localhost:3000/'));
