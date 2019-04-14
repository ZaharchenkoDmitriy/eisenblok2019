var express = require('express');
var dataUa = require('./dataUkr');
var dataRu = require('./dataRu');
var dataDefault = require('./dataDefault');
var nodeMailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data: dataRu, defaultData: dataDefault, language: 'ru'});
});
router.get('/ua', function(req, res, next) {
  res.render('index', {data: dataUa, defaultData: dataDefault, language: 'ua'})
});
router.post('/contact_us', function (req, res, next) {
  var msg = req.body;

  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'eisenblock2019@gmail.com',
      pass: '9991998ilswbtnl'
    }
  });
  let mailOptions = {
    from: 'EISENBLOCK',
    to: "dmitriyvoronkov777@gmail.com",
    subject: '[EISENBLOCK] Сообщение от посетителя',
    html: `<p>От ${msg.name} (${msg.number})</p> <p>${msg.message}</p> `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
  res.end('{"success" : "Submitted successfully", "status" : 200}');
});
module.exports = router;
