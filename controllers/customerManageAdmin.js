var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    res.render('adminDash/customerManageAdmin/index');
  }
  else
  {
    res.redirect('/login');
  }
});

module.exports = router;