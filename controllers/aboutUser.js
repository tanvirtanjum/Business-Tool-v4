var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('aboutUser/index');
});
router.get('/editProfile', function(req, res)
{
  res.render('aboutUser/edit');
});
module.exports = router;
