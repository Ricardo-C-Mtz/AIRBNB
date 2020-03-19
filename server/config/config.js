// PUERTO
process.env.PORT = process.env.PORT || 3000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//CONEXIÓN A BASE DE DATOS  
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/sample_airbnb';
} else {
    urlDB = 'mongodb+srv://Admin:socom45678americanarmy@cluster0-naezp.mongodb.net/biblioteca';
}

process.env.URLDB = urlDB;