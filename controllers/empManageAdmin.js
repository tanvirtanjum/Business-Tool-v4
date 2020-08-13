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

var srchStatus= false;

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    var user =
    {

    }
    employee.getAllEmployee(user,function(results)
    {
      res.render('adminDash/empManageAdmin/index', {list:results, sInfo:sInfo, srchStatus:srchStatus});
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
    if(req.session.type == 1)
    {
      var lInfo=
      {
        lid: req.body.empId,
        sid: req.body.designation,
        pass: '1234'
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
    if(req.session.type == 1)
    {
      var info=
      {
        EmpID: req.body.SearchID
      }

      employee.getEmployee(info, function(result)
      {
        if(result.length>0)
        {

          sInfo.EmpID= result[0].EmpID;
          sInfo.name= result[0].E_NAME;
          sInfo.did= result[0].DID;
          sInfo.sal= result[0].SAL;
          sInfo.mob= result[0].E_MOB;
          sInfo.mail= result[0].E_MAIL;
          sInfo.join =result[0].JOIN_DATE;
          sInfo.addby= result[0].ADDED_BY;

          srchStatus = true;

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
    var uInfo=
    {
      EmpID: req.body.empId,
      name: req.body.empName,
      did: req.body.designation,
      sal: req.body.empSalary,
      mob: req.body.empMobileNo,
      mail: req.body.empEmail
    }

    employee.updateEmployee(uInfo, function(result)
    {
      if(result==true)
      {
        var uLInfo=
        {
          lid: req.body.empId,
          sid: req.body.designation
        }
        log_in.changeSID(uLInfo, function(result)
        {
          if(result == true)
          {
            sInfo.EmpID= req.body.empId;
            sInfo.name=  req.body.empName;
            sInfo.did= req.body.designation;
            sInfo.sal= req.body.empSalary;
            sInfo.mob= req.body.empMobileNo;
            sInfo.mail= req.body.empEmail;

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
  if(req.body.hasOwnProperty("DELETE"))
  {
    var dLInfo=
    {
      lid: req.body.empId,
    }

    log_in.deleteLogin(dLInfo, function(result)
    {
      if(result==true)
      {
        var dEInfo=
        {
          EmpID: req.body.empId,
        }
        employee.deleteEmployee(dEInfo, function(result)
        {
          if(result==true)
          {
            sInfo.EmpID= "";
            sInfo.name= "";
            sInfo.did= "";
            sInfo.sal= "";
            sInfo.mob= "";
            sInfo.mail= "";
            sInfo.join ="";
            sInfo.addby= "";

            srchStatus = false;

            res.redirect('/adminDash/empManageAdmin');
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
  if(req.body.hasOwnProperty("REFRESH"))
  {
    sInfo.EmpID= "";
    sInfo.name= "";
    sInfo.did= "";
    sInfo.sal= "";
    sInfo.mob= "";
    sInfo.mail= "";
    sInfo.join ="";
    sInfo.addby= "";

    srchStatus = false;

    res.redirect('/adminDash/empManageAdmin');
  }
});
module.exports = router;
