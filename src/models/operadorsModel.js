const mongoose = require('mongoose');

const operadorsSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    rfc: {
        type: String,
        required: true,
        unique:true
    },
    linea: {
        type: String,
        required: true
    },
    scac: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required:true      
    }
});

operadorsSchema.index({ rfc: 1, nombre: -1 });

operadorsSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
});

module.exports = mongoose.model('operadors', operadorsSchema)