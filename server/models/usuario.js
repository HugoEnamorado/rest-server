// Este archivo contiene el modelo
// usuario de la coleccion de la DB().

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
      type: String,
      required: [true, 'El nombre es necesario']
      
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: password,
        required:[ true, 'La contraseña es necesario']
    },

    img:{
        type: String,
        required:false

    },

    role:{
        type: String,
        required:'USER_ROLE'
    },
    estado:{
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false

    }


});


