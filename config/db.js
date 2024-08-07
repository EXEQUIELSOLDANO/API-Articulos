const { Sequelize } = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');

//dotenv.config();
// configuracion de Sequelize para SQLite
const sequelize = new Sequelize({
    storage: path.join(__dirname, '..', 'database.sqlite'),//Ruta donde se almacena la base de datos
    dialect: 'sqlite',
    logging: false
});

module.exports = { sequelize }