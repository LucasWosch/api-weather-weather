const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Weather = sequelize.define('Weather', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  cityId: { type: DataTypes.INTEGER, allowNull: false },
  temperature: { type: DataTypes.FLOAT, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  forecastDate: { type: DataTypes.DATE, allowNull: false }
}, {
  tableName: 'weather',
  timestamps: true
});

module.exports = Weather;
