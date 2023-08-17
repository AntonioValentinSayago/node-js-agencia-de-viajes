
const guardarTestimonial = (req, res)  => {

    // Validar Formulario

    const { nombre, correo, mensaje } = req.body;

    const errores = []

    if (nombre.trim() === '') {
        errores.push({mensaje: "el Nombre esta vacio"});
    }
    if (correo.trim() === '') {
        errores.push({mensaje: "el correo esta vacio"});
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje: "el mensaje esta vacio"});
    }

    if (errores.length > 0) {
        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimonales',
            errores,
            nombre,
            correo,
            mensaje,
        })
    }else {
        
    }

}

export { guardarTestimonial }