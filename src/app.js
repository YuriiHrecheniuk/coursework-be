'use strict';

const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const utils = require('./utils');

const app = express();

app.use(cors({origin: '*'}));
app.use(logger('dev'));
app.use(express.json());

app.use('/api', require('./routes'));

app.use((err, req, res, next) => {
  const {http_code} = err;
  console.log(err);
  if (http_code) {
    res.status(http_code).json(err);
  } else {
    res.status(500).json({message: 'Internal Server Error'});
  }
});

setupGlobals();

function setupGlobals() {
  global.Utils = utils;
}

module.exports = app;
