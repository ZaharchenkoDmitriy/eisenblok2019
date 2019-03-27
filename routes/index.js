var express = require('express');
var dataUa = require('./dataUkr');
var dataRu = require('./dataRu');
var dataDefault = require('./dataDefault');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data: getDataByReqLanguage(req), defaultData: dataDefault});
});
router.get('/ua', function(req, res, next) {
  res.render('index', {data: dataUa, defaultData: dataDefault})

});
router.get('/ru', function(req, res, next) {
  res.render('index', {data: dataRu, defaultData: dataDefault})

});

function getDataByReqLanguage(req) {
  return getPreferable(parseReqLanguages(req)) === 'ua' ? dataUa : dataRu;
}

function getPreferable(languages) {
  return languages.findIndex(l => l.key === 'ua') > languages.findIndex(l => l.key === 'ru') ? 'ru' : 'ua';
}

function parseReqLanguages(req) {
  return req.headers['accept-language']
      .match(/[a-zA-Z]+;q=.+,/)[0]
      .split(',')
      .map((s) => {
        let sp = s.split(';q=');
        return sp.length > 1 ?  {
          key: sp[0],
          q:  + sp[1]
        } : null
      })
      .filter( s => s)
      .sort( (s1, s2) => s2.q - s1.q);
}

module.exports = router;
