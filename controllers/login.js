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
  //res.redirect('/managerDash');
  //res.redirect('/salesmanDash');
  //res.redirect('/deliverymanDash');
  //res.redirect('/customerDash');
});

module.exports = router;
