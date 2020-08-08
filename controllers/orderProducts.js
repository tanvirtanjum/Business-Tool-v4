var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  if(req.session.type == 5)
  {
    res.render('customerDash/orderProducts/index');
  }
  else
  {
    res.redirect('/login');
  }

});
router.get('/buy', function(req, res)
{
  if(req.session.type == 5)
  {
    res.render('customerDash/orderProducts/buy/index');
  }
  else
  {
    res.redirect('/login');
  }

});

module.exports = router;
