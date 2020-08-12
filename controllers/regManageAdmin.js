var express = require('express');
var router = express.Router();

var customer 	= require.main.require('./models/customer');
var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    var user =
    {

    }
    customer.getAllPendingCustomer(user,function(results)
    {
      res.render('adminDash/regManageAdmin/index', {list:results});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
