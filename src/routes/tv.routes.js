const express = require('express');
const {TVController} = require('../controllers');

const router = express.Router();

router
  .route('/')
  .post(TVController.createTV)
  .get(TVController.searchTV);

router
  .route('/:id')
  .get(TVController.getTV);

module.exports = router;