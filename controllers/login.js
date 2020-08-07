var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('login/index');
});

router.post('/', function(req, res)
{
  if(req.body.username == '1' && req.body.password == '1')
  {
		req.session.username = req.body.username;
		res.redirect('/adminDash');
	}
  else if(req.body.username == '2' && req.body.password == '2')
  {
		req.session.username = req.body.username;
		res.redirect('/managerDash');
	}
  else if(req.body.username == '3' && req.body.password == '3')
  {
		req.session.username = req.body.username;
		res.redirect('/salesmanDash');
	}
  else if(req.body.username == '4' && req.body.password == '4')
  {
		req.session.username = req.body.username;
		res.redirect('/deliverymanDash');
	}
  else if(req.body.username == '5' && req.body.password == '5')
  {
		req.session.username = req.body.username;
		res.redirect('/customerDash');
	}
  else
  {
		res.send('invalid username/password');
	}
});

module.exports = router;
