var express = require('express');
var dataUa = require('./dataUkr');
var dataRu = require('./dataRu');
var dataDefault = require('./dataDefault');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data: dataRu, defaultData: dataDefault, language: 'ru'});
});
router.get('/ua', function(req, res, next) {
  res.render('index', {data: dataUa, defaultData: dataDefault, language: 'ua'})
});

module.exports = router;
