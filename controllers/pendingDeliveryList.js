var express = require('express');
var router = express.Router();

var orderlist = require.main.require('./models/orderlist');

router.get('/', function(req, res)
{
  if(req.session.type == 4)
  {
    orderlist.getAllPendingOrder( function(result)
    {
      res.render('DeliverymanDash/pendingDeliveryList/index',{list: result});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
