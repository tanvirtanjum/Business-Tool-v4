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
}

var srchStatus= false;

router.get('/', function(req, res)
{

  //res.render('adminDash/customerManageAdmin/index');
  if(req.session.type == 1)
  {
    var user =
    {

    }
    customer.getAllActiveCustomer(user,function(results)
    {
      res.render('adminDash/customerManageAdmin/index', {list:results, sInfo:sInfo, srchStatus:srchStatus});
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

      customer.getActiveCustomer(info, function(result)
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

          res.redirect('/adminDash/customerManageAdmin');
        }
        else
        {
          res.send('Something Went Wrong....');
        }
      });
    }
  }
  if(req.body.hasOwnProperty("DE-ACTIVE"))
  {
    sInfo.Id= "";
    sInfo.name= "";
    sInfo.designation= "";
    sInfo.Email= "";
    sInfo.MobileNo= "";
    sInfo.JoinDate= "";

    srchStatus = false;

    res.redirect('/adminDash/customerManageAdmin');
  }
  if(req.body.hasOwnProperty("REFRESH"))
  {
    sInfo.Id= "";
    sInfo.name= "";
    sInfo.designation= "";
    sInfo.Email= "";
    sInfo.MobileNo= "";
    sInfo.JoinDate= "";

    srchStatus = false;

    res.redirect('/adminDash/customerManageAdmin');
  }
});

module.exports = router;
