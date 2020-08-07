var express = require('express');
var router = express.Router();

router.get('/aboutUser/editProfile', function(req, res)
{
  res.render('aboutUser/editProfile/index');
});
module.exports = router;
