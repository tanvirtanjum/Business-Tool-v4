var express = require('express');
var router = express.Router();

var complain = require.main.require('./models/complain');

router.get('/', function(req, res)
{
  if(req.session.type == 5)
  {
    res.render('customerDash/complainBox/index');
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/', function(req, res)
{
  if(req.session.type == 5)
  {
    var info=
    {
      sub: req.body.sub,
      oid: req.session.uid,
      text: req.body.text
    }
    complain.pushComplain(info,function(result)
    {
      if(result == true)
      {
        res.redirect('/customerDash/complainBox');
      }

      else
      {
        res.send("Something Went Wrong....");
      }
    });
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
