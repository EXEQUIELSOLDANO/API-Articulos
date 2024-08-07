const Articulo = require('../models/articulos');

const insertArticulo = async (req, res) => {
    const { nombre, marca } = req.body;
    try {
        const articulo = Articulo.create({ nombre, marca });
        res.status(200).json(articulo)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const getArticulos = async (req, res) => {
    const { nombre, estadoActivo } = req.query;
    try {
        const articulo = await Articulo.findAll({
            where: {
                //Filtro por nombre
                ...(nombre && { nombre: { [Op.iLike]: `%${nombre}%` } }),
                //Filtro por estadoActivo, si es proporcionado en la consulta
                ...(estadoActivo !== undefined && { estadoActivo: estadoActivo === 'true' }),
            }
        })
        //responde con los articulos encontrados
        res.status(200).json(articulo)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateArticulo = async (req, res) => {
    const { id } = req.params;
    const { nombre, marca, estadoActivo } = req.body;
    try {
        const articulo = await Articulo.findByPk(id);
        if (!articulo) {
            return res.status(404).json({ error: 'artículo no encontrado' })
        }
        //Actualiza el articulo con los nuevos datos
        await articulo.update({ nombre, marca, estadoActivo, modifiedDate: new Date() })
        //responde con el articulo actualizado
        res.status(200).json(articulo)
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}
// cuando hacemos delete no elimina el producto sino que lo modifica a estado inactivo
const deleteArticulo = async (req, res) => {
    const { id } = req.params;
    try {
        const articulo = await Articulo.findByPk(id);
        if (!articulo) {
            return res.status(404).json({ error: ' artículo no encontrado' });
        }
        //desactiva el articulo en lugar de eliminarlo
        await articulo.update({ estadoActivo: false })
        //lo devuelve
        res.status(200).json(articulo);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    insertArticulo,
    getArticulos,
    deleteArticulo,
    updateArticulo,
};