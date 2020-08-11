var express = require('express');
var router = express.Router();

var product = require.main.require('./models/product');

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
  if(req.session.type == 1)
  {
    product.getAllProduct(function(results)
    {
      res.render('adminDash/prodManageAdmin/index',{list:results,pInfo:pInfo,searchStatus:searchStatus});
    })
  }
  else
  {
    res.redirect('/login');
  }
});

router.post('/' ,function(req,res)
{
  if(req.body.hasOwnProperty("SEARCH"))
  {
    if(req.session.type ==1 )
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

          res.redirect('/adminDash/prodManageAdmin');
        }
        else
        {
          res.send('Something Went Wrong....');
        }
      })
    }
  }
  if(req.body.hasOwnProperty("INSERT"))
  {
    if(req.session.type==1)
    {
      var proInfo={
        pId: req.body.proId,
        name: req.body.proName,
        type: req.body.proType,
        quantity: req.body.proQuantity,
        buyPrice: req.body.proBuyPrice,
        SellPrice: req.body.proSellPrice,
        modBy: req.session.uid 
      }
      product.insertProduct(proInfo,function(result)
      {
        if(result==true)
        {
          res.redirect("/adminDash/prodManageAdmin");
        }
        else
        {
          res.send('Something Went Wrong');
        }
      })
    }
  }
  if(req.body.hasOwnProperty("UPDATE"))
  {
    var productInfo={
      pId: req.body.proId,
      name: req.body.proName,
      type: req.body.proType,
      quantity: req.body.proQuantity,
      buyPrice: req.body.proBuyPrice,
      SellPrice: req.body.proSellPrice 
    }
    product.updateProduct(productInfo,function(result){
      if(result==true)
      {
        pInfo.pId=req.body.proId;
        pInfo.name= req.body.proName;
        pInfo.type= req.body.proType;
        pInfo.quantity= req.body.proQuantity;
        pInfo.buyPrice= req.body.proBuyPrice;
        pInfo.SellPrice= req.body.proSellPrice;

        res.redirect("/adminDash/prodManageAdmin");
      }
      else{
        res.send("Something Went Wrong....");
      }
    })
  }

  if(req.body.hasOwnProperty("DELETE"))
  {
    var info={
      pId: req.body.proId
    }
    product.deleteProduct(info,function(result)
    {
      if(result==true)
      {
        pInfo.pId="";
        pInfo.name="";
        pInfo.type="";
        pInfo.quantity="";
        pInfo.buyPrice="";
        pInfo.SellPrice="";
        pInfo.modBy="";
        pInfo.addDate="";

        searchStatus=false;
        res.redirect("/adminDash/prodManageAdmin");
      }
      else{
        res.send("Something Went Wrong....");
      }
    });
  }
  if(req.body.hasOwnProperty("REFRESH"))
  {
    pInfo.pId="";
    pInfo.name="";
    pInfo.type="";
    pInfo.quantity="";
    pInfo.buyPrice="";
    pInfo.SellPrice="";
    pInfo.modBy="";
    pInfo.addDate="";

    searchStatus=false;

    res.redirect('/adminDash/prodManageAdmin');
    
  }
});

module.exports = router;
