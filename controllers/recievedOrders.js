var express = require('express');
var router = express.Router();

var orderlist = require.main.require('./models/orderlist');

router.get('/', function(req, res)
{
  if(req.session.type == 5)
  {
    orderlist.getUserRecieveReport(req.session.uid, function(result)
    {
      res.render('customerDash/recievedRecords/index',{list: result});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;
