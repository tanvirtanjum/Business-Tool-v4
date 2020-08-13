var db = require('./dbc');

module.exports=
{
    getAllComplains: function(callback)
    {
      var sql ="SELECT *FROM `complain`;";
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

    getComplain: function(id,callback)
    {
      var sql = "SELECT *FROM `complain` WHERE `cID` ='"+id.cID+"';";
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

    pushComplain: function(info,callback)
    {
      var sql ="INSERT INTO `complain`(`sub`, `OwnerID`, `Text`) VALUES ('"+info.sub+"','"+info.oid+"','"+info.text+"');";

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
