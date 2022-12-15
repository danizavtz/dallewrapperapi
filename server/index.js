const router = require('express').Router();
const dalleService = require('./services/dalle.service')

router.post('/', dalleService.dalle);

module.exports = router;