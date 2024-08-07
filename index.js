const express = require('express');
const dotenv = require('dotenv');
const articulosRoutes = require('./routes/articulosRoutes.js');
const { sequelize } = require('./config/db.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/articulos', articulosRoutes)

app.listen(port, async () => {
    console.log(`Servidor corriendo en el Puerto ${port}`);
    await sequelize.sync({ force: true })
})
