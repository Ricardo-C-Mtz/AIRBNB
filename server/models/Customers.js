const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let customerSchema = new Schema({
    Address: {
        type: String,
        required: [true, 'Agregue una Descripción']
    },
    City: {
        type: String,
        required: [true, 'Agregue su Ciudad']
    },
    Country: {
        type: String,
        required: [true, 'Ingrese su Pais']
    },
    District: {
        type: String,
        required: [true, 'Agregue una Municipio']
    },
    FisrtName: {
        type: String,
        required: [true, 'Agregue su Nombre']
    },
    LastName: {
        type: String,
        required: [true, 'Agregue su Apellido']
    },
    Status: {
        type: String,
        default: 'Active'
    }
});

customerSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe que ser único y diferente'
});

module.exports = mongoose.model('Customers', customerSchema);