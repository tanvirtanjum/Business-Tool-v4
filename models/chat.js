var db = require('./dbc');

module.exports=
{
    send : function(info,callback)
    {
        var sql="INSERT INTO `chat`(`DATE`,`SUB`, `SENDER`, `TEXT`, `ATTACHMENT`, `RECEIVER`, `STATUS`) VALUES(CURRENT_TIMESTAMP(),'"+info.a+"','"+info.d+"','"+info.c+"',' ','"+info.a+"','0');";
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
