const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let customerSchema = new Schema({
    _id: {
        type: Number
    },
    address: {
        type: String,
        required: [true, 'Por favor ingresa la direccion del cliente']
    },
    city: {
        type: String,
        required: [true, 'Por favor ingresa la ciudad del cliente']
    },
    country: {
        type: String,
        required: [true, 'Por favor ingresa el pais al que pertenece la ciudad']
    },
    district: {
        type: String,
        required: [true, 'Por favor ingresa el distrito al que pertenece']
    },
    firstName: {
        type: String,
        required: [true, 'Por favor ingresa el nombre del cliente']
    },
    lastName: {
        type: String,
        required: [true, 'Por favor ingresa el apeido del cliente']
    },
    status: {
        type: Boolean,
        default:'Active'
    }
});

customerSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Customer', customerSchema);
