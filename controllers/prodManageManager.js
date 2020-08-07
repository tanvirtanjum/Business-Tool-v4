var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('managerDash/prodManageManager/index');
});

module.exports = router;
