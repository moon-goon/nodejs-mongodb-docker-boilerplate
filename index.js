const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    'mongodb://mongo:27017/nodejs-mongo', { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => console.log('Server running...'));
