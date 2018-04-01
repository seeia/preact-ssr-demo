'use strict'
require('babel-register')({
  extensions: ['.jsx', '.js']
});
var express = require('express');
var path = require('path');
var http = require('http')
var reload = require('reload')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var nunjucks = require('nunjucks')
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();
var server = http.createServer(app)
var ENV = process.env.NODE_ENV || 'development'


if(ENV === 'development'){
  // hot reload
  var webpack = require('webpack')
  var webpackDevMiddle = require('webpack-dev-middleware')
  var webpackHotMiddle = require('webpack-hot-middleware')
  var webpackDevConfig = require('./webpack.config.babel')
  var compiler = webpack(webpackDevConfig)
  reload(server, app)
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html')
var nunjuck = nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  watch: true,
  express: app,
  tags: {
    variableStart: '##',
    variableEnd: '##'
  }
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// preact SSR
var render = require('preact-render-to-string');
const { h } = require('preact');
const RGX = /<div id="app"><\/div>/i;
var App = require('./src/index/App').default
const template = fs.readFileSync('./views/template.html', 'utf8');
app.use('*', function(req, res, next){
    let url = req.url;
		let body = render(h(App));
		let temp = template.replace(RGX, body)
		res.send(temp);
})



// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// module.exports = app;



server.listen(3000, function () {
  console.log('App (dev) is now running on port ' + 3000)
})
