const express = require('express');
const {MoviesController} = require('../controllers');

const router = express.Router();

router
  .route('/')
  .post(MoviesController.createMovie)
  .get(MoviesController.searchMovie);

router
  .route('/:id')
  .get(MoviesController.getMovie);

module.exports = router;