var db = require('../utilities/database');
var mail = require('../utilities/mail');

var test = function(req, res, next){
	db.database().any('select * from test')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Test complete'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

var send = function(req, res, next){
  mail.send('carlos.diaz@sinco.com.co', 'Prueba', 'Hola mundo', function(msj){
    res.status(200)
      .json({
        status: 'success',
        data: msj,
        message: 'Test complete'
      });
  }, function(error){
    console.log(error);
  });
}

module.exports = {
  ping: test,
  sendMailTest: send
};