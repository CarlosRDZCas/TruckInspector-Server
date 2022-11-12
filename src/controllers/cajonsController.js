const cajonsSchema = require('../models/cajonsModel')

const postCajons = (req, res) => {
    const cajon = cajonsSchema(req.body);
    cajon.save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const getCajons = (req, res) => {
    cajonsSchema.find().sort({fecha:-1})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const getCajonsByCajon = (req, res) => {
    const { cajon } = req.params
    console.log('cajon :>> ', cajon);
    cajonsSchema.findOne({ cajon }).sort({ fecha: -1 }).limit(1)
        .then((result) => {
            console.log('result :>> ', result);
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

module.exports = {
    postCajons,
    getCajons,
    getCajonsByCajon
}