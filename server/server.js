// Archivo para iniciar el servidor
// npm install body-parser
// npm install express
require('./config/config')

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//Parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended : false}));

//parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

//conectar a la db
mongoose.connect('mongodb://localhost: 27017/cafe', {useNewUrlParser : true}, (err, res) => {

    if(err) throw err; // si hay un erro que lo muestre 
     
    console.log('base de dato online');
 
});

app.listen(process.env.PORT, () => {
console.log('Escuchando puerto: ', process.env.P);

})