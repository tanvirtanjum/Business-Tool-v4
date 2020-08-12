var express = require('express');
var router = express.Router();

var history = require.main.require('./models/history');

router.get('/', function(req, res)
{
  if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3)
  {
    history.get(function(result){
      res.render('salesHistory/index',{list:result});
    })
  }
  else
  {
    res.redirect('/login');
  }
 

});
// router.post('/',function(req,res)
// {
//   if(req.session.type == 1 || req.session.type == 2 || req.session.type == 3)
//   {
//     if(req.body.hasOwnProperty("PRINT"))
//   {
    
//   }
//   }
// });

module.exports = router;
