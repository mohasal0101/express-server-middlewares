'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./error-handlers/500');
const validateNumber = require('./middlewares/validate-number');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello to number validator!');
});

app.get('/square', validateNumber(), (req, res) => {
  const number = req.squareNum;
  res.status(200).json({ num: number });
});

app.use(errorHandler);


function start(port) {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
}

module.exports = {
  start: start,
  app: app,
};