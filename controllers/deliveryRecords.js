var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  if(req.session.type == 5)
  {
    res.render('DeliverymanDash/deliveryRecords/index');
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
