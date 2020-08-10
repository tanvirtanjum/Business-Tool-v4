var express = require('express');
var router = express.Router();

var changePassword = require.main.require('./models/changePassword');

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4 || req.session.type == 5)
  {
    var user={
      id: req.session.uid
    }
    changePassword.passwordChange(user,function(results){
      res.render('changepassword/index',{user:results});
    });
    
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/',function(req,res){
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4 || req.session.type == 5)
  {
    var user={
      id : req.session.uid
    }
    if(req.body.hasOwnProperty("save"))
    {
      var info={
        oldPassword : req.body.oldpassword,
        newPassword : req.body.newpassword,
        confirmNewPassword: req.body.confirmnewpassword
      }
      if(info.newPassword==info.confirmNewPassword){
          changePassword.passwordChange(info,function(results)
          {
            console.log("password Change successfully");
            res.redirect('/login');
          })
      }
    }
  }
});

module.exports = router;
