var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3 || req.session.type == 4)
  {
    res.render('notice/index');
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
