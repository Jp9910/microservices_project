var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carrinhoRouter = require('./routes/carrinho');

var app = express();

testarBD();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use(express.static('public')) // static file served on route: http://localhost:3000/images/aurelioncoffee.jpg
// app.use('/static', express.static('public')) // static file served on route: http://localhost:3000/static/images/aurelioncoffee.jpg
app.use('/carrinho', carrinhoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function testarBD() {
    console.log("Testar BD")
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'password',
        database: 'carrinho'
    })
    connection.connect()
    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
        if (err) throw err
        
        console.log('The solution is: ', rows[0].solution)
    })
    connection.end()
    console.log("BD Testado")
}

module.exports = testarBD;
module.exports = app;