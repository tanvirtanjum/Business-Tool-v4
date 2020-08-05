var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  res.render('adminDash/index');
});
router.get('/employeeManage', function(req, res)
{
  res.render('/adminDash/empManage');
});

module.exports = router;
