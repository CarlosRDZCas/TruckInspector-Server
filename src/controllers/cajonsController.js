const cajonsSchema = require('../models/cajonsModel')

const postCajons = async (req, res) => {
    const cajon = cajonsSchema(req.body);
    await cajon.save()
        .then((cajon) => {
            res.json({
                ok: true,
                cajon
            })
        }).catch((err) => {
            res.status(400).json({
                ok: false,
                msg: 'Error al agregar el cajon'
            })
        });
}

const getCajons = async (req, res) => {
    await cajonsSchema.find().sort({ fecha: -1 })
        .then((cajon) => {
            res.json({
                ok: true,
                cajon
            })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: 'Error al buscar el cajon' })
        });
}

const getCajonsByCajon = async (req, res) => {
    const { cajon } = req.params
    await cajonsSchema.findOne({ cajon }).sort({ fecha: -1 }).limit(1)
        .then((cajon) => {
            res.json({ ok: true, cajon })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: 'Error al buscar el cajon' })
        });
}

module.exports = {
    postCajons,
    getCajons,
    getCajonsByCajon
}