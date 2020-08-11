var express = require('express');
var router = express.Router();

var employee 	= require.main.require('./models/employee');

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

module.exports = router;
