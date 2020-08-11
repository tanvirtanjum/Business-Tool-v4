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
    if(req.session.uid == 1)
    {
      var lInfo=
      {
        lid: req.body.empId,
        sid: req.body.designation,
        pass: '123'
      }

      log_in.insetLogin(lInfo, function(result)
      {
        var eInfo=
        {
          EmpID: req.body.empId,
          name: req.body.empName,
          did: req.body.designation,
          sal: req.body.empSalary,
          mob: req.body.empMobileNo,
          mail: req.body.empEmail,
          addby: req.session.uid
        }
        if(result== true)
        {
          employee.insertEmployee(eInfo, function(result)
          {
            if(result==true)
            {
              res.redirect("/adminDash/empManageAdmin")
            }
            else
            {
              res.send('E went wrong');
            }
          });
        }
        else
        {
          res.send('L went wrong');
        }
      });
    }
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
