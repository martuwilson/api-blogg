const express = require('express');
const dbConnection = require('./db/connection');
const cors = require('cors');
require('dotenv').config(); // npm i dotenv --- for read the .env file



//crear servidor de express
const app = express();

//Base de datos conexion
dbConnection();

//CORS
app.use(cors());

//directorio publico
app.use(express.static('public'));

//lectura del body
app.use(express.json());

//rutas

//escuchar peticiones:

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});