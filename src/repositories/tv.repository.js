const BaseRepository = require('./base.repository');
const {TV} = require('../models');

class TVRepository extends BaseRepository {
  constructor() {
    super(TV);
  }
}

module.exports = new TVRepository();
