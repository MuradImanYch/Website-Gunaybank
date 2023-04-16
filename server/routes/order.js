const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');

router.post('/card', controller.card);

module.exports = router;