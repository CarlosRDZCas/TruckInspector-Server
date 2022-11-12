const mongoose = require('mongoose')

const cajonsSchema = mongoose.Schema({

    cajon: {
        type: Number,
        required: true
    },
    caja: {
        type: String,
        required: true
    },
    propietario: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('cajons', cajonsSchema);