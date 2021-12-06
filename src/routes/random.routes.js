const express = require('express');
const {RandomController} = require('../controllers');

const router = express.Router();

router
  .route('/')
  .get(RandomController.getRandomMovie);

module.exports = router;