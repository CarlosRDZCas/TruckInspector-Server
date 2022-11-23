const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nivelacceso: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sucursal: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    fechaacceso: {
        type: Date,
        required: true
    }
});

userSchema.method('toJSON', function () {
    const { __v, fechaacceso, nivelacceso, password, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = mongoose.model('users', userSchema);