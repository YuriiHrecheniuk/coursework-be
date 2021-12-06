const express = require('express');

const router = express.Router();

router.use('/movie', require('./movie.routes'));
router.use('/random', require('./random.routes'));
router.use('/tv', require('./tv.routes'));

module.exports = router;