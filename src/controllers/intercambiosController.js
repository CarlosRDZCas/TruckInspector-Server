const { response } = require('express')
const counterModel = require('../models/counterModel')
const intercambiosSchema = require('../models/intercambiosModel')

const postIntercambio = (req, res = response) => {
    const intercambio = intercambiosSchema(req.body)

    counterModel.findOneAndUpdate(
        { id: "folio" },
        { "$inc": { "sequence": 1 } }, { new: true }, async (err, cd) => {
            let seqId;
            if (cd == null) {
                const newval = new counterModel({ id: "folio", sequence: 1 })
                newval.save()
                seqId = 1
            }
            else {
                seqId = cd.sequence;
            }
            const inter = await intercambiosSchema.find({
                datos: intercambio.datos,
                trailer: intercambio.trailer,
                llantas: intercambio.llantas,
                imagenes: intercambio.imagenes,
                accesorios: intercambio.accesorios
            })
            if (inter.length > 0) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe ese intercambio'
                });
            }

            const newintercambio = new intercambiosSchema({
                "datos.folio": seqId,
                datos: intercambio.datos,
                trailer: intercambio.trailer,
                llantas: intercambio.llantas,
                imagenes: intercambio.imagenes,
                accesorios: intercambio.accesorios

            });
            await newintercambio.save()
                .then((intercambio) => {
                    res.json({
                        ok: true,
                        intercambio
                    })
                }).catch((err) => {
                    res.status(400).json({
                        ok: false,
                        msg: 'Error al guardar el intercambior'
                    })
                });
        })
}

const getIntercambio = async (req, res = response) => {
    const { folio } = req.params
    await intercambiosSchema.findOne({ folio })
        .then((intercambio) => {
            res.json({
                ok: true,
                intercambio
            })
        }).catch((err) => {
            res.status(400).json(
                {
                    ok: false,
                    msg: 'Error al encontrar el folio'
                }
            )
        });
}

const updateIntercambio = async (req, res = response) => {
    const { folio } = req.params
    const inter = req.body

    await intercambiosSchema.findOneAndUpdate({ folio },
        {
            "datos": inter.datos,
            "trailer": inter.trailer,
            "llantas": inter.llantas,
            "imagenes": inter.imagenes,
            "accesorios": inter.accesorios
        }, { new: true })
        .then((intercambio) => {
            res.json({ ok: true, intercambio })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: "Error al actualizar el intercambio" })
        });
}

const getIntercambios = async (req, res = response) => {
    const { limit } = req.query
    intercambiosSchema.find().limit(limit).sort({ 'datos.folio': -1 })
        .then((intercambio) => {
            res.json({ ok: true, intercambio })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: "Error al obtener los intercambios" })
        });
}

const getIntercambiosByFolio = async (req, res = response) => {
    const { folio } = req.params
    intercambiosSchema.find({ 'datos.folio': folio }).sort({ 'datos.folio': -1 })
        .then((intercambio) => {
            res.json({ ok: true, intercambio })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: "Error al obtener los intercambios" })
        });
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

const getIntercambiosByFecha = async (req, res = response) => {
    const { fecha } = req.params
    const date = Date.parse(fecha)
    const dateplusone = addDays(fecha, 1)

    intercambiosSchema.find({ 'datos.fechaintercambio': { $gte: date, $lt: dateplusone } })
        .sort({ 'datos.folio': -1 })
        .then((intercambio) => {
            res.json({ ok: true, intercambio })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: "Error al obtener los intercambios" })
        });
}

const getIntercambiosByUnidad = async (req, res = response) => {
    const { unidad } = req.params
    intercambiosSchema.find({ 'datos.unidad': unidad })
        .sort({ 'datos.folio': -1 })
        .then((intercambio) => {
            res.status(400).json({ ok: true, intercambio })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: "Error al obtener los intercambios" })
        });
}

const getIntercambiosByTrailer = async (req, res = response) => {
    const { trailer } = req.params
    intercambiosSchema.find({ 'trailer.numerotrailer': trailer })
        .sort({ 'datos.folio': -1 })
        .then((intercambio) => {
            res.json({ ok: true, intercambio })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: "Error al obtener los intercambios" })
        });
}


module.exports = {
    postIntercambio,
    getIntercambio,
    updateIntercambio,
    getIntercambios,
    getIntercambiosByFolio,
    getIntercambiosByFecha,
    getIntercambiosByUnidad,
    getIntercambiosByTrailer

}