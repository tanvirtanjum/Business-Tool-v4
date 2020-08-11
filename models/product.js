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
    
}