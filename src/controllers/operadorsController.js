const operadorsSchema = require('../models/operadorsModel');

const postOperadors = (req, res) => {
    const operadors = operadorsSchema(req.body);

    operadors.save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const getOperadors = (req, res) => {
    operadorsSchema.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const getOperadorsByRFCandSCAC = (req, res) => {
    const { rfc, scac } = req.params;

    operadorsSchema.findOne({ rfc, scac })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

module.exports = {
    postOperadors,
    getOperadors,
    getOperadorsByRFCandSCAC
}