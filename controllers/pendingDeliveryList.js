var express = require('express');
var router = express.Router();

var product = require.main.require('./models/product');
var orderlist = require.main.require('./models/orderlist');

var info2 =
{
  pId: '',
  pID: '',
  newQuant: ''
}


router.get('/', function(req, res)
{
  if(req.session.type == 4)
  {
    orderlist.getUserPendingDelivery(req.session.uid, function(result)
    {
      res.render('DeliverymanDash/pendingDeliveryList/index',{list: result});
    });
  }
  else
  {
    res.redirect('/login');
  }
});

router.get('/REJECTED/:id', function(req, res)
{
  if(req.session.type == 4)
  {
    orderlist.getSpecificgOrder(req.params.id, function(result)
    {
      if(result.length>0)
      {
        info2.newQuant = result[0].quant;
        info2.pId = result[0].prodid;
        info2.pID = result[0].prodid;

        orderlist.cancelOrder(req.params.id, function(result)
        {
          if(result == true)
          {
            product.getProduct(info2, function(result)
            {
              if(result.length>0)
              {
                info2.newQuant=info2.newQuant+result[0].QUANTITY;
                product.updateProductAfter(info2, function(result)
                {
                  if(result)
                  {
                    res.redirect('/DeliverymanDash/pendingDeliveryList');

                  }
                  else
                  {
                    req.send("Something Went Wrong...");
                  }
                });
              }
              else
              {
                req.send("Something Went Wrong...");
              }
            });
          }
          else
          {
            req.send("Something Went Wrong...");
          }
        });
      }
      else
      {
        req.send("Something Went Wrong...");
      }
    });
  }
});

module.exports = router;
