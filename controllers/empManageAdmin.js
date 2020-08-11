var express = require('express');
var router = express.Router();

var employee 	= require.main.require('./models/employee');
var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    var user =
    {

    }
    employee.getAllEmployee(user,function(results)
    {
      res.render('adminDash/empManageAdmin/index', {list:results});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/', function(req, res)
{
  if(req.body.hasOwnProperty("INSERT"))
  {
    res.send('INSERT');
  }
  else if(req.body.hasOwnProperty("SEARCH"))
  {
    res.send('SEARCH');
  }
  else if(req.body.hasOwnProperty("UPDATE"))
  {
    res.send('UPDATE');
  }
});
module.exports = router;
