const {MoviesRepository} = require('../../repositories');
const {validateCreateMovie} = require('./movie.validate');
const {random} = require('lodash');

class MovieService {
  async getMovie(id) {
    const movie = await MoviesRepository.findOne({movie_id: id});

    if (!movie) {
      throw Utils.Error.badRequest('Movie not found.', 'movie.not_found');
    }

    return movie;
  }

  async getRandomMovie() {
    const moviesNumber = await MoviesRepository.count();

    return random(1, moviesNumber);
  }

  async createMovie(payload) {
    const data = await validateCreateMovie(payload);

    return MoviesRepository.create(data);
  }

  async searchMovies(query) {
    const movies = await MoviesRepository.find({title: new RegExp(query, 'i')}, 'movie_id');

    return movies.map(movie => movie.movie_id);
  }
}

module.exports = new MovieService();