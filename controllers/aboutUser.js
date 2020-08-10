var express = require('express');
var router = express.Router();

var employee 	= require.main.require('./models/employee');
var customer 	= require.main.require('./models/customer');

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
      var user =
      {
        EmpID : req.session.uid
      }

      employee.getEmployee(user,function(results)
      {
        res.render('aboutUser/index', {user:results});
      });
  }
  else if(req.session.type == 5)
  {
      var user =
      {
        cusid : req.session.uid
      }

      customer.getCustomer(user,function(results)
      {
        res.render('aboutUser/index', {user:results});
      });
  }
  else
  {
    res.redirect('/login');
  }
});

router.get('/editProfile', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
      var user =
      {
        EmpID : req.session.uid
      }

      employee.getEmployee(user,function(results)
      {
        res.render('aboutUser/edit', {user:results});
      });
  }
  else if(req.session.type == 5)
  {
      var user =
      {
        cusid : req.session.uid
      }

      customer.getCustomer(user,function(results)
      {
        res.render('aboutUser/edit', {user:results});
      });
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/editProfile', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
      var user =
      {
        EmpID : req.session.uid
      }

      employee.getEmployee(user,function(results)
      {
        res.render('aboutUser/index');
      });
  }
  else if(req.session.type == 5)
  {
    if(req.body.hasOwnProperty("save"))
    {
        var info =
        {
          cusid : req.session.uid,
          name : req.body.fullname,
          design : req.body.designation,
          email : req.body.email,
          mobile : req.body.mobile
        }

        customer.updateOwnProfileCustomer(info,function(results)
        {
          res.redirect('/aboutUser');
        });
    }
  }
  else
  {
    res.redirect('/login');
  }
});
module.exports = router;
