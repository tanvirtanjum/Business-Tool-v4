var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
/*	if(req.session.username != null)
  {
		res.render('home/index');
	}

  else
  {
		res.redirect('/login');
	} */
  res.render('home/index');
});

module.exports = router;
