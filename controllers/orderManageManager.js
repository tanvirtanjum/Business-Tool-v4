
var express = require('express');
var router = express.Router();

var orderlist = require.main.require('./models/orderlist');

router.get('/', function(req, res)
{
  if(req.session.type == 2)
  {
    orderlist.getAllPendingOrder( function(result)
    {
      res.render('managerDash/orderManageManager/index',{list: result});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

router.get('/approve/:id', function(req, res)
{
  if(req.session.type == 2)
  {
    orderlist.getSpecificgOrder(req.params.id, function(result)
    {
      if(result.length > 0)
      {
        //console.log(result[0].PID);
        res.render('managerDash/orderManageManager/approve/index',{order: result[0]});
      }
      else
      {
        console.log("NOT FOUND"+req.params.id);
      }

    });
  }
  else
  {
    res.redirect('/login');
  }

});

router.post('/approve/:id', function(req, res)
{
  if(req.session.type == 2)
  {
    var info=
    {
      del: req.body.b,
      id: req.body.a
    }
    orderlist.approveOrder(info, function(result)
    {
      if(result == true)
      {
        res.redirect("/managerDash/orderManageManager");
      }
    });
  }
  else
  {
    res.redirect('/login');
  }

});


module.exports = router;
