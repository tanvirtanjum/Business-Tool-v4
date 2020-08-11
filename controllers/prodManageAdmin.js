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
var id

router.get('/', function(req, res)
{
  if(req.session.type == 1)
  {
    product.getAllProduct(function(results)
    {
      res.render('adminDash/prodManageAdmin/index',{list:results,pInfo:pInfo});
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
          pInfo.PId = result[0].PID;
          pInfo.name = result[0].P_NAME;
          pInfo.type = result[0].TYPE;
          pInfo.avail = result[0].AVAILABILITY;
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
});

module.exports = router;
