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

    cancelOrder: function(info,callback)
    {
      var sql="DELETE FROM `orderlist` WHERE `orderid`='"+info+"' AND `stat`='0';";

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

    returnOrder: function(info,callback)
    {
      var sql="DELETE FROM `orderlist` WHERE `orderid`='"+info+"' AND `stat`='1';";

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

    deliveredOrder: function(info,callback)
    {
      var sql="UPDATE `orderlist` SET `stat`='2' WHERE `orderid`='"+info+"';";

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

    approveOrder: function(info,callback)
    {
      var sql="UPDATE `orderlist` SET `stat`='1', `deliveryby`='"+info.del+"' WHERE `orderid`='"+info.id+"';";

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

    getAllPendingOrder: function(callback)
    {
      var sql="SELECT * FROM `orderlist` WHERE `stat`='0';";

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
    },

    getUserPendingDelivery: function(info,callback)
    {
      var sql="SELECT * FROM `orderlist` WHERE `deliveryby`='"+info+"' AND `stat`='1';";

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
    },

    getUserDeliveryReport: function(info,callback)
    {
      var sql="SELECT * FROM `orderlist` WHERE `deliveryby`='"+info+"' AND `stat`='2';";

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
    },

    getSpecificgOrder: function(info,callback)
    {
      var sql="SELECT * FROM `orderlist` WHERE `orderid`='"+info+"';";

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
    },

    getUserConfirmedOrder: function(info,callback)
    {
      var sql="SELECT * FROM `orderlist` WHERE `orderby`='"+info+"' AND `stat`='1';";

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
