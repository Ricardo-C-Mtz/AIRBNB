const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');
const Customer = require('./customer');
const Place = require('./place');


let Schema = mongoose.Schema;

let rentSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectID,
        ref: 'Customer',
        required: [true, 'Favor de ingresar el nombre del cliente']
    },
    place: {
        type: Schema.Types.ObjectID,
        ref: 'Place',
        required: [true, 'Favor de ingresar el lugar de la renta']
    },
    dateRent: {
        type: Date,
        required: [true,'Favor de ingresar la fecha de renta']
    }
});



rentSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Rent', rentSchema);