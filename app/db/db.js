const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('goalDB', 'root', 'rootroot', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
