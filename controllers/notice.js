var express = require('express');
var router = express.Router();

var customer 	= require.main.require('./models/customer');
var log_in 	= require.main.require('./models/log_in');

var nInfo=
{
  Id: "",
  sub: "",
  text: ""
}

var srchStatus= false;

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
    res.render('notice/index');
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
