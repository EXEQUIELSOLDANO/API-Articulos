const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Articulo = sequelize.define('articulo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaModificacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estadoActivo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }

});

module.exports = Articulo;