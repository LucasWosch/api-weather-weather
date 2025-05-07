const express = require('express');
require('dotenv').config();
const sequelize = require('./config/db');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
app.use(express.json());
app.use(weatherRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(4000, () => console.log('Weather API rodando na porta 4000'));
  } catch (err) {
    console.error('Erro ao iniciar a API:', err);
  }
};

start();
