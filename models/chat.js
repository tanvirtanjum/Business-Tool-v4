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
    },

    sentList : function(info,callback)
    {
        var sql="SELECT * FROM `chat` WHERE `SENDER`='"+info+"';";
        db.getResults(sql, function(result)
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

    unseenInbox : function(info,callback)
    {
        var sql="SELECT * FROM `chat` WHERE `RECEIVER`='"+info+"' AND `STATUS`='0';";
        db.getResults(sql, function(result)
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

    seenInbox : function(info,callback)
    {
        var sql="SELECT * FROM `chat` WHERE `RECEIVER`='"+info+"' AND `STATUS`='1';";
        db.getResults(sql, function(result)
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

    seen : function(info,callback)
    {
        var sql="UPDATE `chat` SET `STATUS`='1' WHERE `MSG_ID`='"+info.a+"' AND `RECEIVER`='"+info.b+"';";

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
