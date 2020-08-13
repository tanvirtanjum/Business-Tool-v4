var express = require('express');
var router = express.Router();

var product = require.main.require('./models/product');
//var sales = require.main.require('./models/sales');

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
router.get('/buy', function(req, res)
{
  if(req.session.type == 5)
  {
    res.render('customerDash/orderProducts/buy/index');
  }
  else
  {
    res.redirect('/login');
  }

});

module.exports = router;
