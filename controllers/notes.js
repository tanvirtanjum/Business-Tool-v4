var express = require('express');
var router = express.Router();

var note 	= require.main.require('./models/note');

var nInfo=
{
  sub: "",
  text: "",
  id: ""
}

var srchStatus= false;

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
    var user =
    {
      OwnerID: req.session.uid
    }
    note.getAllNote(user,function(results)
    {
      res.render('notes/index', {list:results, nInfo:nInfo, srchStatus:srchStatus});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/', function(req, res)
{
  if(req.body.hasOwnProperty("PUSH"))
  {
    if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
    {
      var param=
      {
        NoteName: req.body.name,
        OwnerID: req.session.uid,
        Text: req.body.notes
      }
      note.insetNote(param,function(result)
      {
        if(result == true)
        {
          nInfo.sub="";
          nInfo.text="";
          nInfo.id=";"
          srchStatus= false;
          res.redirect('/notes');
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

  if(req.body.hasOwnProperty("SEE"))
  {
    if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
    {
      var param=
      {
        NoteID: req.body.search,
        OwnerID: req.session.uid
      }
      note.getNote(param,function(result)
      {
        if(result.length > 0)
        {
          nInfo.sub=result[0].NoteName;
          nInfo.text=result[0].Text;
          nInfo.id=result[0].NoteID;
          srchStatus= true;
          res.redirect('/notes');
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
      nInfo.id="";
      srchStatus= false;
      res.redirect('/notes');
    }
    else
    {
      res.redirect('/login');
    }
  }
});

module.exports = router;
