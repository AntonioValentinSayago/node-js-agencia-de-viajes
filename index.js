/* const express = require('express') */
import express from 'express'
import router from  './routes/index.js';
import db from './config/db.js'

const app = express();

// Conectar a la base de datos

db.authenticate()
    .then( () => console.log("Conexion exitosa a la base de datos"))
    .catch (err => console.log(err))

// Defenimos el Puerto del servidor
const port = process.env.PORT || 3000;

// Habilitar PUG - Template
app.set('view engine', 'pug');

// Definir la carptea publica 
app.use(express.static('public'))

// Habilitar nuestro Middleware Obtener el año actual
app.use( (req, res, next) => {  // Nex: en la pila de Middleware ir hacia el sigueiente 
    const year = new Date();

    res.locals.ActualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes'
    next();
})

// Peticiones hacia el servidor de tipo GET req = es lo que enviamos , res es lo que express envia
app.use('/', router);

app.listen(port,() => {
    console.log(`Servidor en el Pueeto ${port}`);
})

