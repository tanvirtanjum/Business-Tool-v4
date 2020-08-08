var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  if(req.session.type == 3)
  {
    res.render('salesmanDash/sellProducts/index');
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
