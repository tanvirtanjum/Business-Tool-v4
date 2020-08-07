var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('aboutUser/index');
});

module.exports = router;
