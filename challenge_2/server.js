require('dotenv').config();
const express = require('express');
// const path = require('path');

const app = express();
const { PORT } = process.env;

app.use('/', express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
