var db = require('./dbc');

module.exports=
{
    requestBuy : function(info,callback)
    {
      var sql="INSERT INTO `orderlist`(`prodid`, `quant`, `ammout`, `stat`, `ord_date`, `deliveryby`, `orderby`) VALUES ('"+info.a+"','"+info.b+"','"+info.c+"','0',CURRENT_TIMESTAMP(),'"+info.d+"','"+info.d+"');";

      db.execute(sql,function(result)
      {
          if(result)
          {
              callback(true);
          }
          else
          {
              callback(false);
          }
      });
    },

    getUserPendingOrder: function(info,callback)
    {
      var sql="SELECT * FROM `orderlist` WHERE `orderby`='"+info+"' AND `stat`='0';";

      db.getResults(sql,function(result)
      {
          if(result.length > 0)
          {
              callback(result);
          }
          else
          {
              callback([]);
          }
      });
    }
}
