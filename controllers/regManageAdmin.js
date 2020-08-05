var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('adminDash/regManageAdmin/index');
});

module.exports = router;
