var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3)
  {
    res.render('salesHistory/index');
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
