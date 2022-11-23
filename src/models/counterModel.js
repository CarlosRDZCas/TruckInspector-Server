const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    sequence: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('counter', counterSchema);