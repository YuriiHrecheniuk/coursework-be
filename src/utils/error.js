function badRequest(error, status) {
  return {
    error,
    status,
    http_code: 400
  };
}

module.exports = {
  badRequest
};