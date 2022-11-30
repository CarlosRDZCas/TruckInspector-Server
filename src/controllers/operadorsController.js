const operadorsSchema = require('../models/operadorsModel');
const path = require("path");

const postOperadors = async (req, res) => {
    const operadors = operadorsSchema(req.body);   
    await operadorsSchema.findOneAndUpdate({ rfc:operadors.rfc }, {
        nombre: operadors.nombre,
        rfc: operadors.rfc,
        linea: operadors.linea,
        scac: operadors.scac,
        image: operadors.image
    }, { upsert: true })
        .then((operadors) => {
            res.json({ ok: true, operadors })
        }).catch((err) => {
            console.log('err :>> ', err);
            res.status(400).json({ ok: false, msg: 'Error al agregar el operador' })
        });
}

const getOperadors = async (req, res) => {
    await operadorsSchema.find()
        .then((operadors) => {
            res.json({ ok: true, operadors })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: 'Error al buscar el operador' })
        });
}

const getOperadorsByRFCandSCAC = async (req, res) => {
    const { rfc, scac } = req.params;
    await operadorsSchema.findOne({ rfc, scac })
        .then((operadors) => {
            res.json({ ok: true, operadors })
        }).catch((err) => {
            res.status(400).json({ ok: false, msg: 'Error al buscar el operador ' })
        });
}

const postImage = async (req, res = response) => {
    try {
        if (!req.files) {
            res.send({
                ok: false,
                msg: 'No hay archivos para cargar'
            });
        }
        else {
            const image = req.files.image;
            const extensionName = path.extname(image.name); // fetch the file extension
            const allowedExtension = ['.png', '.jpg', '.jpeg'];

            if (!allowedExtension.includes(extensionName)) {
                return res.send({ ok: false, msg: "La extension del archivo no esta permitida" });
            }
            image.mv('./uploads/imagenes_operadores/' + image.name);
            res.send({
                ok: true,
                msg: 'Archivo cargado',
                data: {
                    name: image.name,
                    mimetype: image.mimetype,
                    size: image.size
                }
            });
        }
    } catch (err) {
        console.log('err :>> ', err);
        res.status(500).send(err);
    }
}

const getImage = async (req, res = resposne) => {

}


module.exports = {
    postOperadors,
    getOperadors,
    getOperadorsByRFCandSCAC,
    postImage
}