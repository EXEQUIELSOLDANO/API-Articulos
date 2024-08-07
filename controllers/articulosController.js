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
                ...(nombre && { nombre: { [Op.iLike]: `%${nombre}%` } }),
                ...(estadoActivo !== undefined && { estadoActivo: estadoActivo === 'true' }),
            }
        })
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
        await articulo.update({ nombre, marca, estadoActivo, modifiedDate: new Date() })
        res.status(200).json(articulo)
    } catch (error) {
        res.status
    }
}

const deleteArticulo = async (req, res) => {
    const { id } = req.params;
    try {
        const articulo = await Articulo.findByPk(id);
        if (!articulo) {
            return res.status(404).json({ error: ' artículo no encontrado' });
        }
        await articulo.update({ estadoActivo: false })
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