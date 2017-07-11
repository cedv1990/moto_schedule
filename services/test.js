var db = require('../utilities/database');
var calendar = require('../utilities/calendar');

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

var list = function(req, res, next){
  calendar.list(function(msj){
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

var add = function(req, res, next){
  calendar.add(function(msj){
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
  viewCalendar: list,
  addCalendar: add
};