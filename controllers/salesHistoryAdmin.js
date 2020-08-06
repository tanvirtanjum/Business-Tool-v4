var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('adminDash/salesHistoryAdmin/index');
});

module.exports = router;
