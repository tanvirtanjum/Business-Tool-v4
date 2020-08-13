var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  if(req.session.type == 4)
  {
    res.render('deliverymanDash/index');
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
