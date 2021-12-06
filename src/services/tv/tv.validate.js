'use strict';

const Joi = require('joi');

function validateCreateTV(payload) {
  const schema = Joi.object({
    name: Joi.string().required(),
    overview: Joi.string().required(),
    vote_average: Joi.number().required(),
    number_of_episodes: Joi.number().required(),
    spoken_languages: Joi.array().items(Joi.string()).min(1)
  });

  return Utils.Joi.validate(schema, payload);
}

module.exports = {
  validateCreateTV
};