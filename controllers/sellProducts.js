var express = require('express');
var router = express.Router();

var product = require.main.require('./models/product');
var sales = require.main.require('./models/sales');

var pInfo={
  pId: "",
  name:"",
  type:"",
  avail:"",
  quantity:"",
  buyPrice:"",
  SellPrice:"",
  modBy:"",
  addDate:"",
}
var searchStatus=false;

router.get('/', function(req, res)
{
  if(req.session.type == 3)
  {
    product.getAllProduct(function(results)
    {
      res.render('salesmanDash/sellProducts/index',{list:results,pInfo:pInfo,searchStatus:searchStatus});
    })
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/' , function(req,res)
{
  if(req.body.hasOwnProperty("SEARCH"))
  {
    if(req.session.type ==3)
    {
      var info=
      {
        pID:req.body.SearchID
      }
      product.getProduct(info,function(result){
        if(result.length > 0)
        {
          pInfo.pId = result[0].PID;
          pInfo.name = result[0].P_NAME;
          pInfo.type = result[0].TYPE;
          pInfo.quantity = result[0].QUANTITY;
          pInfo.buyPrice = result[0].BUY_PRICE;
          pInfo.SellPrice = result[0].SELL_PRICE;
          pInfo.modBy = result[0].MOD_BY;
          pInfo.addDate = result[0].Add_PDate;

          searchStatus=true;

          res.redirect('/salesmanDash/sellProducts');
        }
        else
        {
          res.send('Something Went Wrong....');
        }
      })
    }
  }
  if(req.body.hasOwnProperty("SELL"))
  {
    if(req.session.type==3)
    {
      var profits=req.body.proSellPrice-req.body.proBuyPrice;
      var proInfo={
        pId: req.body.proId,
        quantity: req.body.proQuantity,
        SellPrice: req.body.proSellPrice,
        profit: profits,
        cusName: req.body.customerName,
        cusMobile: req.body.customerNo,
        sellBy: req.session.uid
      }
      sales.insertSell(proInfo,function(result)
      {
        if(result==true)
        {
          res.redirect('/salesmanDash/sellProducts');
        }
        else
        {
          res.send('Something Went Wrong....');
        }
      })
      
      
    }
  }
})

module.exports = router;
