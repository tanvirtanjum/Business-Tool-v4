var express = require('express');
var router = express.Router();

var chat = require.main.require('./models/chat');

var chatin=
{
  sender: "",
  subject: "",
  test : ""
}

var list1;
var list2;
var list3;

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
    chat.unseenInbox(req.session.uid, function(result1)
    {
      if(result1)
      {
        list1 = result1;

        chat.seenInbox(req.session.uid, function(result2)
        {
          if(result2)
          {
            list2 = result2;
            chat.sentList(req.session.uid, function(result3)
            {
              if(result3)
              {
                list3 = result3;
                res.render('chatBox/index',{chatin: chatin, list1: list1, list2:  list2, list3: list3 });
              }
            });
          }
        });
      }
    });
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

router.get('/ACCEPTED/:id', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
    
  }
});

module.exports = router;
