var express = require('express');
var router = express.Router();

var employee 	= require.main.require('./models/employee');
var log_in 	= require.main.require('./models/log_in');

var sInfo=
{
  EmpID: "",
  name: "",
  did: "",
  sal: "",
  mob: "",
  mail: "",
  join: "",
  addby: ""
}


router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    var user =
    {

    }
    employee.getAllEmployee(user,function(results)
    {
      res.render('adminDash/empManageAdmin/index', {list:results, sInfo:sInfo});
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
              res.send('Something Went Wrong....');
            }
          });
        }
        else
        {
          res.send('Something Went Wrong....');
        }
      });
    }
  }

  if(req.body.hasOwnProperty("SEARCH"))
  {
    if(req.session.uid == 1)
    {
      var info=
      {
        EmpID: req.body.SearchID
      }

      employee.getEmployee(info, function(result)
      {
        if(result.length>0)
        {

            sInfo.EmpID= result[0].EmpID,
            sInfo.name= result[0].E_NAME,
            sInfo.did= result[0].DID,
            sInfo.sal= result[0].SAL,
            sInfo.mob= result[0].E_MOB,
            sInfo.mail= result[0].E_MAIL,
            sInfo.join =result[0].JOIN_DATE,
            sInfo.addby= result[0].ADDED_BY
          res.redirect('/adminDash/empManageAdmin');
        }
        else
        {
          res.send('Something Went Wrong....');
        }
      });
    }
  }
  if(req.body.hasOwnProperty("UPDATE"))
  {
    res.send('UPDATE');
  }
});
module.exports = router;
