require('dotenv').config();
const express = require('express');
const { csvCreator } = require('./script');
// const path = require('path');

const app = express();
const { PORT } = process.env;

app.use('/', express.static('client'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', (req, res) => {
  // create csv
  let csv = csvCreator(req.body);
  // add csv to response
  // send response
  res.status(200).send(csv);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
