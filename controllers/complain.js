var express = require('express');
var router = express.Router();

router.get('/',function(req,res)
{
    res.render('adminDash/complainBox/index')
})

module.exports=router;