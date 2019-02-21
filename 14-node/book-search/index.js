const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const PORT = 3000; // Change this for production.

const app = express();
app.set('view-engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/search', (req, res) => {
  const booksURL = `https://www.googleapis.com/books/v1/volumes?q=title:${ req.query.title }`;
  console.log(booksURL);
  axios.get(booksURL).then((result) => {
    const cover = result.data.items[0].volumeInfo.imageLinks.thumbnail;
    const title = result.data.items[0].volumeInfo.title;
    res.render('result.ejs', { cover: cover, title: title });
  });
});

app.listen(PORT, () => console.log(`Now serving http://localhost:${ PORT }`));
