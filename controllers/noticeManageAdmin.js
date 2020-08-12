var express = require('express');
var router = express.Router();

var notice 	= require.main.require('./models/notice');

var nInfo=
{
  Id: "",
  sub: "",
  text: ""
}

var srchStatus= false;

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    var user =
    {

    }
    notice.getAllNotice(user,function(results)
    {
      res.render('adminDash/noticeManageAdmin/index', {list:results, nInfo:nInfo, srchStatus:srchStatus});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/', function(req, res)
{
  if(req.body.hasOwnProperty("SEND"))
  {
    if(req.session.uid == 1)
    {
      param=
      {
        noteSub: req.body.noteSub,
        noticetext: req.body.noticetext
      }
      notice.insetNotice(param,function(result)
      {
        if(result == true)
        {
          nInfo.Id="";
          nInfo.sub="";
          nInfo.text="";
          var srchStatus= false;
          res.redirect('adminDash/noticeManageAdmin/index');
        }
        else
        {
          res.send("Something went wrong...");
        }
      });
    }

    else
    {
      res.redirect('/login');
    }
  }

  if(req.body.hasOwnProperty("DISABLE"))
  {
    if(req.session.uid == 1)
    {

    }

    else
    {
      res.redirect('/login');
    }
  }

  if(req.body.hasOwnProperty("ENABLE"))
  {
    if(req.session.uid == 1)
    {

    }

    else
    {
      res.redirect('/login');
    }
  }

  if(req.body.hasOwnProperty("REFRESH"))
  {
    if(req.session.uid == 1)
    {

    }

    else
    {
      res.redirect('/login');
    }
  }
});
module.exports = router;
