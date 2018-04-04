const express = require('express');
const router = express.Router();
const fs = require('fs')
const render = require('preact-render-to-string');
const { h } = require('preact');
const RGX = /<div id="app"><\/div>/i;
const App = require('../src/index/App').default
const PROJECT_PATH = process.cwd()
console.log('aas', __dirname, process.cwd() + '/../views/template.html')
const template = fs.readFileSync( process.cwd() + '/views/template.html', 'utf8');


router.get('/', (req, res, next) => {
  let url = req.url;
  let body = render(h(App));
  let temp = template.replace(RGX, body)
  res.send(temp);
})
module.exports = router;