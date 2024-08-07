const { Sequelize } = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');

//dotenv.config();

const sequelize = new Sequelize({
    storage: path.join(__dirname, '..', 'database.sqlite'),//Ruta donde se almacena la base de datos
    dialect: 'sqlite',
});

module.exports = { sequelize }