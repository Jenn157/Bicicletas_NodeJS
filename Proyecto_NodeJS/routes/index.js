// Realizado por:
// -Santiago Andres Rodriguez
// -Jennifer Acuña Amado

//Importar modulo express
var express = require('express');
var router = express.Router();

/* Metodo que maneja las rutas, va a generar el archivo html, llama la vista index y le envia el atributo title */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Exporta la variable router
module.exports = router;
