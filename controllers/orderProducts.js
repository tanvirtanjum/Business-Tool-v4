var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('customerDash/orderProducts/index');
});

module.exports = router;
