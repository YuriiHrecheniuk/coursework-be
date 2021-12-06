const {TVRepository} = require('../../repositories');
const {validateCreateTV} = require('./tv.validate');

class TVService {
  async getTV(id) {
    const tv = await TVRepository.findOne({tv_id: id});

    if (!tv) {
      throw Utils.Error.badRequest('TV not found.', 'tv.not_found');
    }

    return tv;
  }

  async createTV(payload) {
    const data = await validateCreateTV(payload);

    return TVRepository.create(data);
  }

  async searchTVs(query) {
    const tvs = await TVRepository.find({title: new RegExp(query)}, 'tv_id');

    return tvs.map(tv => tv.tv_id);
  }
}

module.exports = new TVService();