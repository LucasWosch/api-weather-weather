const Weather = require('../models/weather');
const redis = require('../config/redis');
const axios = require('axios');

const getAllWeather = async () => {
  const cacheKey = 'weather:all';
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const weathers = await Weather.findAll({ raw: true });
  const result = [];

  for (const w of weathers) {
    const res = await axios.get(`${process.env.CITIES_API}/${w.cityId}`);
    result.push({
      ...w,
      cityName: res.data.name
    });
  }

  await redis.set(cacheKey, JSON.stringify(result), 'EX', 3600);
  return result;
};

const createWeather = async (data) => {
  const { cityId } = data;

  // valida cidade via API de cidades
  const city = await axios.get(`${process.env.CITIES_API}/${cityId}`).catch(() => null);
  if (!city || !city.data) throw new Error('Cidade não encontrada');

  const created = await Weather.create(data);

  await redis.del('weather:all'); // limpa cache
  return created;
};

module.exports = { getAllWeather, createWeather };
