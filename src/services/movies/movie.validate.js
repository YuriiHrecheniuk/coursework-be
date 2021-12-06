'use strict';

const Joi = require('joi');

function validateCreateMovie(payload) {
  const schema = Joi.object({
    title: Joi.string().required(),
    overview: Joi.string().required(),
    release_date: Joi.string().required(),
    genres: Joi.array().items(Joi.string()),
    vote_average: Joi.number(),
    budget: Joi.number(),
    original_language: Joi.string().required()
  });

  return Utils.Joi.validate(schema, payload);
}

module.exports = {
  validateCreateMovie
};