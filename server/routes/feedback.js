const express = require('express');
const router = express.Router();
const controller = require('../controllers/feedback');

router.post('/feedback', controller.feedback);
router.get('/getFB', controller.get);
router.post('/delFB', controller.del);

module.exports = router;