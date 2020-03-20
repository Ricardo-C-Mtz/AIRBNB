require('../Server/config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();


// Habilita CORS
app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader(
'Access-Control-Allow-Headers',
'Origin, X-Requested-With, Content-Type, Accept, Authorization, token'
);
res.setHeader(
'Access-Control-Allow-Methods',
'GET, POST, PATCH, PUT, DELETE, OPTIONS'
);
next();
});

//Parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// Parse formato a application/json
app.use(bodyparser.json());

// Importa las rutas del archivo index
app.use(require('../Server/routes/index'));

//conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/biblioteca', {
//mongoose.connect('mongodb+srv://omar:omar1360@cluster0-otmhu.mongodb.net/test?retryWrites=true&w=majority', {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
    (err, resp) => {
        if (err) throw err;

        console.log('Base de datos ONLINE');
    });

// Puerto de escucha de la app
app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto', process.env.PORT);
});
