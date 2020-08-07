var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('customerDash/pendingOrders/index');
});

module.exports = router;
