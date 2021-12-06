const BaseRepository = require('./base.repository');
const {Movie} = require('../models');

class MovieRepository extends BaseRepository {
  constructor() {
    super(Movie);
  }
}

module.exports = new MovieRepository();
