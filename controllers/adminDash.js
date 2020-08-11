var express = require('express');
var router = express.Router();

var employee 	= require.main.require('./models/employee');
var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    res.render('adminDash/index');
  }
  else
  {
    res.redirect('/login');
  }
});
/*router.get('/empManageAdmin', function(req, res)
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
router.post('/empManageAdmin', function(req, res)
{
  if(req.session.type == 1)
  {
    if(req.hasOwnProperty("insert"))
    {
      var linfo =
      {
        lid: req.body.empId,
        sid: req.body.designation,
        pass: "1"
      }
      log_in.insetLogin(ulinfoser,function(results)
      {
        if(results == true)
        {
          var einfo =
          {
            EmpID: req.body.empId,
            name: req.body.empName,
            did: req.body.designation,
            sal: req.body.empSalary,
            mob: req.body.empMobileNo,
            mail: req.body.empEmail,
            addby: req.session.uid
          }

          employee.insertEmployee(einfo,function(results)
          {
            if(results == true)
            {
              res.redirect("/adminDash/empManageAdmin")
            }
          });
        }
      });
    }
  }
  else
  {
    res.redirect('/login');
  }
});*/
module.exports = router;
