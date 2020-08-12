var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  if(req.session.type == null)
  {
    res.render('login/index');
  }

  else
  {
    if(req.session.type == '1')
    {
      res.redirect('/adminDash');
    }
    if(req.session.type == '2')
    {
      res.redirect('/managerDash');
    }
    if(req.session.type == '3')
    {
      res.redirect('/salesmanDash');
    }
    if(req.session.type == '4')
    {
      res.redirect('/deliverymanDash');
    }
    if(req.session.type == '5')
    {
      res.redirect('/customerDash');
    }
  }
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
      req.session.uid = response[0].LID;
			req.session.type = response[0].SID;
      if(req.session.type == '1')
      {
    		res.redirect('/adminDash');
    	}
      if(req.session.type == '2')
      {
    		res.redirect('/managerDash');
    	}
      if(req.session.type == '3')
      {
    		res.redirect('/salesmanDash');
    	}
      if(req.session.type == '4')
      {
    		res.redirect('/deliverymanDash');
    	}
      if(req.session.type == '5')
      {
    		res.redirect('/customerDash');
    	}
      if(req.session.type == '0')
      {
        req.session.uid = null;
  			req.session.type = null;
    		res.send('Restricted....');
    	}
		}
    else
    {
      res.send('Somethong Went Wrong....');
    }
    
	});
});

module.exports = router;
