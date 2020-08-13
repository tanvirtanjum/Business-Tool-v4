var express = require('express');
var router = express.Router();

var orderlist = require.main.require('./models/orderlist');

router.get('/', function(req, res)
{
  if(req.session.type == 4)
  {
    orderlist.getUserDeliveryReport(req.session.uid, function(result)
    {
      res.render('DeliverymanDash/deliveryRecords/index',{list: result});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
