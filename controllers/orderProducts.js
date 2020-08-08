var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('customerDash/orderProducts/index');
});
router.get('/Buy', function(req, res)
{
  res.render('customerDash/orderProducts/buy');
});

module.exports = router;
