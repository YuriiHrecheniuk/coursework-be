const {moviesService} = require('../services');

async function getRandomMovie(req, res, next) {
  try {
    const id = await moviesService.getRandomMovie();

    res.json(id);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getRandomMovie
};