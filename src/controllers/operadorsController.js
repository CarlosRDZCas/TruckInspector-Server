const operadorsSchema = require('../models/operadorsModel');

const postOperadors = async (req, res) => {
    const operadors = operadorsSchema(req.body);

    await operadors.save()
        .then((operadors) => {
            res.json({ ok: true, operadors })
        }).catch((err) => {
            res.json({ ok: false, msg: 'Error al agregar el operador' }).status(400)
        });
}

const getOperadors = async (req, res) => {
    await operadorsSchema.find()
        .then((operadors) => {
            res.json({ ok: true, operadors })
        }).catch((err) => {
            res.json({ ok: false, msg: 'Error al buscar el operador' }).status(400)
        });
}

const getOperadorsByRFCandSCAC = async (req, res) => {
    const { rfc, scac } = req.params;
    await operadorsSchema.findOne({ rfc, scac })
        .then((operadors) => {
            res.json({ ok: true, operadors })
        }).catch((err) => {
            res.json({ ok: false, msg: 'Error al buscar el operador ' }).status(400)
        });
}

module.exports = {
    postOperadors,
    getOperadors,
    getOperadorsByRFCandSCAC
}