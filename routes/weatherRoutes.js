const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather', weatherController.getWeather);
router.post('/weather', weatherController.createWeather);
router.get('/weather/city/:cityId', weatherController.getWeatherByCity);

module.exports = router;
