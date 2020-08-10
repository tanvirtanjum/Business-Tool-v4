var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4 || req.session.type == 5)
  {
    res.render('changepassword/index');
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/',function(req,res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4 || req.session.type == 5)
  {
    if(req.body.hasOwnProperty("save"))
    {
      var info=
      {
        lid : req.session.uid,
        oldPassword : req.body.oldpassword,
        confirmNewPassword: req.body.confirmnewpassword
      }

      log_in.changePass(info,function(result)
      {
        if(result == true)
        {
          console.log("password Change successfully");
          res.redirect('/login');
        }
        else
        {
          console.log("Something Went Wrong...");
        }
      });
    }
  }
});

module.exports = router;
