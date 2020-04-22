const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

app.use(express.static(path.resolve('__dirname', '..', 'public')));
app.use(express.json());

const mongoDB = `mongodb://localhost/checkout`;

mongoose.connect(mongoDB, {
  useNewUrlParser: 'true'
});

let db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log('connected to mongodb');
});

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
},
{
  versionKey: false
});

let User = mongoose.model('User', userSchema);

const PORT = 3000;

app.get('/users', (req, res) => {
  console.log('hitting');
  User.find({}, (err, result) => {
    if (err) {
      res.status(500).send('unable to retrieve from database');
    } else {

      res.send(result);
    }
  });
});

app.post('/', (req, res) => {
  let myModel = new User(req.body);
  myModel.save()
    .then(item => {
      res.send('item posted to database');
    })
    .catch(err => {
      res.status(500).send('unable to post to database');
    })
})

app.listen(PORT, () => {
  console.log(`Listening at :${PORT}...`);
});