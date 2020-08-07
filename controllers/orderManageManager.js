var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('managerDash/orderManageManager/index');
});

module.exports = router;
