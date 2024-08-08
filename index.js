const express = require('express');
const dotenv = require('dotenv');
const articulosRoutes = require('./routes/articulosRoutes.js');
const { sequelize } = require('./config/db.js');
const auth = require('./middleware/auth')
const bodyParser = require('body-parser')

dotenv.config();

const app = express();
app.use(bodyParser.json())
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/articulos/auth', auth, articulosRoutes)

app.use('/articulos', articulosRoutes)

// creamos la conexion a la base de datos y al puerto y en caso de error lo captamos en un catch
app.listen(port, async () => {
    console.log(`Servidor corriendo en el Puerto ${port}`);
    try {
        await sequelize.authenticate();
        console.log('Conexión a SQLite exitosa!!!');
        await sequelize.sync({ force: true })

    } catch (error) {
        console.error('No es posible crear conexión a SQLite, intente nuevamente', error)
    }
})
