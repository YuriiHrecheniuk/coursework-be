const {tvService} = require('../services');

async function getTV(req, res, next) {
  try {
    const {id} = req.params;
    const tv = await tvService.getTV(id);

    res.json(tv);
  } catch (e) {
    next(e);
  }
}

async function createTV(req, res, next) {
  try {
    const tv = await tvService.createTV(req.body);

    res.json(tv);
  } catch (e) {
    next(e);
  }
}

async function searchTV(req, res, next) {
  try {
    const {query} = req.query;

    const tv = await tvService.searchTVs(query);

    res.json(tv);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getTV,
  createTV,
  searchTV
};