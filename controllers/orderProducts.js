var express = require('express');
var router = express.Router();

var product = require.main.require('./models/product');
var orderlist = require.main.require('./models/orderlist');

router.get('/', function(req, res)
{
  if(req.session.type == 5)
  {
    product.getAllProductForSale(function(results)
    {
      res.render('customerDash/orderProducts/index',{list:results});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

router.get('/buy/:id', function(req, res)
{
  if(req.session.type == 5)
  {
    product.getProductForOrder(req.params.id, function(result)
    {
      if(result.length > 0)
      {
        //console.log(result[0].PID);
        res.render('customerDash/orderProducts/buy/index',{product: result[0]});
      }
      else
      {
        console.log("NOT FOUND"+req.params.id);
        res.redirect('/customerDash/orderProducts');
      }

    });
  }
  else
  {
    res.redirect('/login');
  }

});

router.post('/buy/:id', function(req, res)
{
  if(req.session.type == 5)
  {
    info=
    {
      a: req.body.a,
      b: req.body.b,
      c: req.body.c*req.body.b,
      d: req.session.uid
    }
    orderlist.requestBuy(info,function(result)
    {
      if(result == true)
      {
        var info=
        {
          pId: req.body.a,
          newQuant: req.body.aq-req.body.b,
        }
        product.updateProductAfter(info, function(result)
        {
          if(result == true)
          {
            res.redirect('/customerDash/orderProducts');
          }
          else
          {
            res.send("Something Went Wrong...");
          }
        });
      }
      else
      {
        res.send("Something Went Wrong...");
      }
    });
  }
  else
  {
    res.redirect('/login');
  }

});

module.exports = router;
