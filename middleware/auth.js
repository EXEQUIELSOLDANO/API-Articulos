const { SECRET_KEY } = require('../config/config')

const auth = (req, res, next) => {
    const secretKey = req.headers["password"]

    if (secretKey && secretKey === SECRET_KEY) {
        next()
    } else {
        res.status(401).json({ message: "Clave incorrecta, No autorizado" })
    }
}
module.exports = auth;