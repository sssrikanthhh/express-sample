const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/books', (req, res) => {
  res.send({
    book1: "you don't know javascript",
    book2: "eloquent javascript",
    book3: "javascript and jquery",
    book4: "javascript: the good parts",
  });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});