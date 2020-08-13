var express = require('express');
var router = express.Router();

var employee 	= require.main.require('./models/employee');
var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  res.render('resetPassword/index');
});

router.post('/', function(req, res)
{
  res.render('resetPassword/index');
});

module.exports = router;
