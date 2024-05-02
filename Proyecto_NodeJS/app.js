// Realizado por:
// -Santiago Andres Rodriguez
// -Jennifer Acuña Amado

//Importacion de todos los modulos 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Importar los archivos js index y users
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Definir el motor de las vistas 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//En la ruta raiz va a ubicar el modulo indexRouter, igual con user se define la ruta
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Validacion de error 404 
app.use(function(req, res, next) {
  next(createError(404));
});

// Validacion de posibles errores mostrando sus codigos 
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Exportar app 
module.exports = app;
