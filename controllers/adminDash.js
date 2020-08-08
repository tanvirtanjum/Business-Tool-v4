var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    res.render('adminDash/index');
  }
  else
  {
    res.redirect('/login');
  }
});
router.get('/employeeManage', function(req, res)
{
  if(req.session.type == 1)
  {
    res.render('/adminDash/empManage');
  }
  else
  {
    res.redirect('/login');
  }
});
module.exports = router;
