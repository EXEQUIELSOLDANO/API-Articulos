const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');


//definicion del modelo de Articulos
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
}, {
    timestamps: true
});

module.exports = Articulo;