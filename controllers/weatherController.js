const weatherService = require('../services/weatherService');

const getWeather = async (req, res) => {
  try {
    const result = await weatherService.getAllWeather();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createWeather = async (req, res) => {
  try {
    const created = await weatherService.createWeather(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getWeatherByCity = async (req, res) => {
    try {
        const result = await weatherService.getWeatherByCityId(req.params.cityId);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getWeather, createWeather, getWeatherByCity };
