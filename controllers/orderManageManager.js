
var express = require('express');
var router = express.Router();

var orderlist = require.main.require('./models/orderlist');

router.get('/', function(req, res)
{
  if(req.session.type == 2)
  {
    orderlist.getAllPendingOrder( function(result)
    {
      res.render('managerDash/orderManageManager/index',{list: result});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
