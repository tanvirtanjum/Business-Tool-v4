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
    if(req.session.type == 1)
    {
      var param=
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
          srchStatus= false;
          res.redirect('/adminDash/noticeManageAdmin');
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

  if(req.body.hasOwnProperty("LOAD"))
  {
    if(req.session.type == 1)
    {
      var param=
      {
        noticeID: req.body.noticeID
      }
      notice.getNotice(param,function(result)
      {
        if(result.length>0)
        {
          nInfo.Id=result[0].noticeID;
          nInfo.sub=result[0].noteSub;
          nInfo.text=result[0].noticetext;
          srchStatus= true;
          res.redirect('/adminDash/noticeManageAdmin');
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

  if(req.body.hasOwnProperty("UPDATE"))
  {
    if(req.session.type == 1)
    {
      var param=
      {
        noticeID: req.body.unoteID,
        noteSub: req.body.noteSub,
        noticetext: req.body.noticetext
      }
      notice.updateNotice(param,function(result)
      {
        if(result == true)
        {
          nInfo.Id="";
          nInfo.sub="";
          nInfo.text="";
          var srchStatus= false;
          res.redirect('/adminDash/noticeManageAdmin');
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

  if(req.body.hasOwnProperty("DELETE"))
  {
    if(req.session.type == 1)
    {
      var param=
      {
        noticeID: req.body.unoteID
      }
      notice.deleteNotice(param,function(result)
      {
        if(result == true)
        {
          nInfo.Id="";
          nInfo.sub="";
          nInfo.text="";
          var srchStatus= false;
          res.redirect('/adminDash/noticeManageAdmin');
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

  if(req.body.hasOwnProperty("REFRESH"))
  {
    if(req.session.type == 1)
    {
      nInfo.Id="";
      nInfo.sub="";
      nInfo.text="";
      srchStatus= false;
      res.redirect('/adminDash/noticeManageAdmin');
    }

    else
    {
      res.redirect('/login');
    }
  }
});
module.exports = router;
