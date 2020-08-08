var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  res.render('login/index');
});

router.post('/', function(req, res)
{
  var user =
  {
		lid: req.body.username,
		password: req.body.password
	};

	log_in.validateLogin(user, function(response)
  {
		if(response.length > 0)
    {
			req.session.uid = response[0].SID;
      if(req.session.uid == '1')
      {
    		res.redirect('/adminDash');
    	}
      if(req.session.uid == '2')
      {
    		res.redirect('/managerDash');
    	}
      if(req.session.uid == '3')
      {
    		res.redirect('/salesmanDash');
    	}
      if(req.session.uid == '4')
      {
    		res.redirect('/deliverymanDash');
    	}
      if(req.session.uid == '5')
      {
    		res.redirect('/customerDash');
    	}
		}
    else
    {
			res.send('invalid username/password');
		}
	});
});

module.exports = router;
