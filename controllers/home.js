var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('home/index');
});

router.post('/', function(req, res)
{
  //res.redirect('/signup');
	if(req.body.hasOwnProperty("signup"))
	{
		res.redirect('/signup');
	}

	else if (req.body.hasOwnProperty("login"))
	{
		res.redirect('/login');
	}
});

module.exports = router;
