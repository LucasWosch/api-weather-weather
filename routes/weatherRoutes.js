const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather', weatherController.getWeather);
router.post('/weather', weatherController.createWeather);

module.exports = router;
