var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('login/index');
});

router.post('/', function(req, res)
{
  //res.redirect('/signup');
	res.redirect('/adminDash');
});

module.exports = router;
