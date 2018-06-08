const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Configure the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Configure the database
mongoose.connect(dbConfig.url)
  .then(() => {
    console.log('Successfully connected to the database');
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
  })

app.get('/', (req, res) => {
  res.json({
    "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
  });
});

// Require Notes routes
require('./app/routes/node.routes')(app);

app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});