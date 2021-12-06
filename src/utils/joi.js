const {badRequest} = require('./error');

module.exports = {
  validate: (schema, payload) =>
    schema.validateAsync(payload).catch(e => {
      throw badRequest(e.message, 'validation_failed');
    })
};