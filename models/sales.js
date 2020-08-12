var db = require('./dbc');

module.exports=
{
    insertSell : function(info,callback)
    {
        var sql="INSERT INTO `sales`(`PID`,`QUANT`,`OB_AMMOUNT`,`PROFIT`,`C_NAME`,`C_MOB`,`SOLD_BY`,`Sell_SDate`) VALUES('"+info.pId+"','"+info.quantity+"','"+info.SellPrice+"','"+info.profit+"','"+info.cusName+"','"+info.cusMobile+"','"+info.sellBy+"', CURRENT_TIMESTAMP())";
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
    }
}