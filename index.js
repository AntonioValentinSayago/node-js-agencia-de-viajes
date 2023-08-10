/* const express = require('express') */
import express from 'express'
import router from  './routes/index.js';

const app = express();

// Defenimos el Puerto del servidor
const port = process.env.PORT || 3000;

// Habilitar PUG - Template
app.set('view engine', 'pug');

// Peticiones hacia el servidor de tipo GET req = es lo que enviamos , res es lo que express envia
app.use('/', router);

app.listen(port,() => {
    console.log(`Servidor en el Pueeto ${port}`);
})

