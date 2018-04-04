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
var app = express();
var server = http.createServer(app)
var ENV = process.env.NODE_ENV || 'development'
var ssr = require('./routes/ssr')

console.log('env', ENV)
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

if(ENV === 'development'){
  // hot reload
  console.log('development')
  var webpack = require('webpack')
  var webpackDevMiddle = require('webpack-dev-middleware')
  var webpackHotMiddle = require('webpack-hot-middleware')
  var webpackDevConfig = require('./webpack.config.babel')
  var compiler = webpack(webpackDevConfig)

  app.use(webpackDevMiddle(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }))
  app.use(webpackHotMiddle(compiler))
  reload(app)
}

app.use('/ssr', ssr)

server.listen(3000, function () {
  console.log('App is now running on port ' + 3000)
})




