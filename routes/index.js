var express = require('express');
var router = express.Router();

var test = require('../services/test');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mi paginita' });
});*/

router.get('/test', test.ping);
router.get('/test/calendar', test.viewCalendar);
router.get('/test/calendar/add', test.addCalendar);

module.exports = router;
