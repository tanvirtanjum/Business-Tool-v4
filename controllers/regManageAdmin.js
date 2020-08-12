var express = require('express');
var router = express.Router();

var customer 	= require.main.require('./models/customer');
var log_in 	= require.main.require('./models/log_in');

var sInfo=
{
  Id: "",
  name: "",
  designation: "",
  MobileNo: "",
  Email: "",
  JoinDate: "",
  sid: ""
}

var srchStatus= false;

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    var user =
    {

    }
    customer.getAllPendingCustomer(user,function(results)
    {
      res.render('adminDash/regManageAdmin/index', {list:results,sInfo:sInfo, srchStatus:srchStatus});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/', function(req, res)
{
  if(req.body.hasOwnProperty("SEARCH"))
  {
    if(req.session.uid == 1)
    {
      var info=
      {
        cusid: req.body.Search
      }

      customer.getPendingCustomer(info, function(result)
      {
        if(result.length>0)
        {
          sInfo.Id= result[0].cusid;
          sInfo.name= result[0].name;
          sInfo.designation= result[0].design;
          sInfo.Email= result[0].email;
          sInfo.MobileNo= result[0].mobile;
          sInfo.JoinDate= result[0].reg_date;

          srchStatus = true;

          res.redirect('/adminDash/regManageAdmin');
        }
        else
        {
          res.send('Something Went Wrong....');
        }
      });
    }
  }
  if(req.body.hasOwnProperty("APPROVE"))
  {
    info=
    {
      lid: sInfo.Id,
      sid: '5'
    }
    log_in.changeSID(info,function(result)
    {
      if(result == true)
      {
        var info=
        {
          cusid: sInfo.Id
        }
        customer.approveCustomer(info,function(result)
        {
          if(result==true)
          {
            sInfo.Id= "";
            sInfo.name= "";
            sInfo.designation= "";
            sInfo.Email= "";
            sInfo.MobileNo= "";
            sInfo.JoinDate= "";
            sInfo.sid= "";

            srchStatus = false;

            res.redirect('/adminDash/regManageAdmin');
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
  if(req.body.hasOwnProperty("REJECT"))
  {
    info=
    {
      cusid: sInfo.Id
    }
    customer.rejectCustomer(info,function(result)
    {
      if(result == true)
      {
        var info=
        {
          lid: sInfo.Id
        }
        log_in.rejectCusLogin(info,function(result)
        {
          if(result==true)
          {
            sInfo.Id= "";
            sInfo.name= "";
            sInfo.designation= "";
            sInfo.Email= "";
            sInfo.MobileNo= "";
            sInfo.JoinDate= "";
            sInfo.sid= "";

            srchStatus = false;

            res.redirect('/adminDash/regManageAdmin');
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
    sInfo.Id= "";
    sInfo.name= "";
    sInfo.designation= "";
    sInfo.Email= "";
    sInfo.MobileNo= "";
    sInfo.JoinDate= "";
    sInfo.sid= "";

    srchStatus = false;

    res.redirect('/adminDash/regManageAdmin');
  }
});


module.exports = router;
