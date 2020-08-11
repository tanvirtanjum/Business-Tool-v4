var db = require('./dbc');

module.exports=
{
    getAllProduct: function(callback)
    {
        var sql ="SELECT *FROM `product`;";
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

    getProduct: function(id,callback)
    {
        var sql = "SELECT *FROM `product` WHERE `PID` ='"+id.pID+"';";
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
    updateProduct: function(info, callback)
    {
		var sql = "UPDATE `product` SET `P_NAME`='"+info.name+"', `TYPE`='"+info.type+"', `QUANTITY`='"+info.quantity+"', `BUY_PRICE`='"+info.buyPrice+"', `SELL_PRICE`='"+info.SellPrice+"' WHERE `PID`='"+info.pId+"';";
		db.execute(sql, function(result)
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
    insertProduct: function(info,callback)
    {
        var sql="INSERT INTO `product`(`PID`,`P_NAME`,`TYPE`,`AVAILABILITY`,`QUANTITY`,`BUY_PRICE`,`SELL_PRICE`,`MOD_BY`,`Add_PDate`) VALUES('"+info.pId+"','"+info.name+"','"+info.type+"','AVAILABLE','"+info.quantity+"','"+info.buyPrice+"','"+info.SellPrice+"','"+info.modBy+"', CURRENT_TIMESTAMP());";
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
    deleteProduct: function(info,callback)
    {
        var sql ="UPDATE `product` SET `AVAILABILITY`='UNAVAILABLE', `QUANTITY`='0' WHERE `PID`='"+info.pId+"';";
        db.execute(sql, function(result)
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
    }

}