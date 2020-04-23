const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve('__dirname', '..', 'public')));
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});