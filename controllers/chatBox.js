var express = require('express');
var router = express.Router();

var chat = require.main.require('./models/chat');

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
    res.render('chatBox/index');
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
    if(req.body.hasOwnProperty("SEND"))
    {
      info =
      {
        a: req.body.reciever,
        b: req.body.subject,
        c: req.body.stext,
        d: req.session.uid
      }

      chat.send(info, function(result)
      {
        if(result)
        {
          res.redirect('/chatBox');
        }
      });
    }
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
