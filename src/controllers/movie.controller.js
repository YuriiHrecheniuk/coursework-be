const {moviesService} = require('../services');

async function getMovie(req, res, next) {
  try {
    const {id} = req.params;
    const movie = await moviesService.getMovie(id);

    res.json(movie);
  } catch (e) {
    next(e);
  }
}

async function createMovie(req, res, next) {
  try {
    const movie = await moviesService.createMovie(req.body);

    res.json(movie);
  } catch (e) {
    next(e);
  }
}

async function searchMovie(req, res, next) {
  try {
    const {query} = req.query;

    const movie = await moviesService.searchMovies(query);

    res.json(movie);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getMovie,
  createMovie,
  searchMovie
};