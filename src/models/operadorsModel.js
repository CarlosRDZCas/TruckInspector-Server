const mongoose = require('mongoose');

const operadorsSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    rfc: {
        type: String,
        required: true
    },
    linea: {
        type: String,
        required: true
    },
    scac: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('operadors', operadorsSchema)