var express = require('express');
var router = express.Router();

var customer 	= require.main.require('./models/customer');
var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  res.render('signup/index');
});

router.post('/', function(req, res)
{
  if(req.body.hasOwnProperty('REGISTER'))
  {
    var info =
    {
      lid: req.body.username,
      sid: '0',
      pass: req.body.password
    }
    log_in.insetLogin(info, function(result)
    {
      if(result == true)
      {
        var detail =
        {
          cusid: req.body.username,
          name: req.body.fullname,
          design: req.body.design,
          email: req.body.email,
          mobile: req.body.mobilenumber
        }
        customer.signCustomer(detail, function(result)
        {
          if(result == true)
          {
            res.redirect('/login');
          }
          else
          {
            res.send('E');
          }
        });
      }
      else
      {
        res.send('Error: try with another user name');
      }
    });
  }
});

module.exports = router;
