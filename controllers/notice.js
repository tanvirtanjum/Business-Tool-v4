var express = require('express');
var router = express.Router();

var notice 	= require.main.require('./models/notice');

var nInfo=
{
  sub: "",
  text: ""
}

var srchStatus= false;

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
    var user =
    {

    }
    notice.getAllNotice(user,function(results)
    {
      res.render('notice/index', {list:results, nInfo:nInfo, srchStatus:srchStatus});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/', function(req, res)
{
  if(req.body.hasOwnProperty("READ"))
  {
    if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
    {
      var param=
      {
        noticeID: req.body.noticeID
      }
      notice.getNotice(param,function(result)
      {
        if(result.length>0)
        {
          nInfo.sub=result[0].noteSub;
          nInfo.text=result[0].noticetext;
          srchStatus= true;
          res.redirect('/notice');
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
    if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
    {
      nInfo.sub="";
      nInfo.text="";
      srchStatus= false;
      res.redirect('/notice');
    }
    else
    {
      res.redirect('/login');
    }
  }
});


module.exports = router;
