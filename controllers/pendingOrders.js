var express = require('express');
var router = express.Router();

var product = require.main.require('./models/product');
var orderlist = require.main.require('./models/orderlist');

router.get('/', function(req, res)
{
  if(req.session.type == 5)
  {
    var info= req.session.uid;

    orderlist.getUserPendingOrder(info, function(result)
    {
      res.render('customerDash/pendingOrders/index',{list: result});
    })
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
