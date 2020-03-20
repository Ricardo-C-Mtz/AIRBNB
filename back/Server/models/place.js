const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let placeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Favor de ingresar el nombre del lugar']

    },
    description: {
        type: String,
        required: [true, 'Favor de ingresar una descripcion del lugar']
    },
    property_type: {
        type: String,
        required: [true, 'Favor de ingresar un tipo de propiedad']
    },
    price: {
        type: Decimal128,
        required: [true, 'Favor de ingresar la editorial del libro']
    },
    estado: {
        type: Boolean,
        default: 'Disponible'
    }

});



placeSchema.plugin(uniquevalidator, {
    message: '{PATH} Debe ser unico y diferente'
});

module.exports = mongoose.model('Place', placeSchema);