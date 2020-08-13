var express = require('express');
var router = express.Router();

var employee 	= require.main.require('./models/employee');
var customer 	= require.main.require('./models/customer');
var log_in 	= require.main.require('./models/log_in');

var info=
{
  a: "",
  b: "",
  c: "",
  d: "",
  e: "",
  f: ""
};

router.get('/', function(req, res)
{
  res.render('resetPassword/index');
});

/*router.post('/', function(req, res)
{
  info.a= req.body.a;
  info.b= req.body.b;
  info.c= req.body.c;
  info.d= req.body.d;
  info.e= req.body.e;
  info.f= req.body.f;

  employee.getEmployeeForRecover(info, function(result)
  {
    if(result)
    {
      log_in.recoverPass(info, function(result)
      {
        if(result)
        {
          //req.session.uid = null;
          //req.session.type = null;
          res.send('/login');
        }
        else
        {
          res.send("No Such User");
        }
      });
    }
  });
  res.render('resetPassword/index');
});*/

module.exports = router;
