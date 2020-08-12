var db = require('./dbc') ;

module.exports=
{
    get : function(callback)
    {
        var sql = "SELECT * FROM `sales`;";
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