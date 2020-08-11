var db = require('./dbc');

module.exports =
{
	getEmployee: function(user, callback)
  {
		var sql = "SELECT * FROM `employee` WHERE `EmpID` ='"+user.EmpID+"';";
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

	getAllEmployee: function(user, callback)
  {
		var sql = "SELECT * FROM `employee` ORDER BY `DID`;";
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

	insertEmployee: function(user, callback)
  {
		var sql = "INSERT INTO `employee`(`EmpID`, `E_NAME`, `DID`, `SAL`, `E_MOB`, `E_MAIL`, `JOIN_DATE`, `ADDED_BY`) VALUES ('"+user.EmpID+"','"+user.name+"','"+user.did+"','"+user.sal+"','"+user.mob+"','"+user.mail+"',CURRENT_TIMESTAMP(),'"+user.addby+"');";
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

	updateOwnProfileEmployee: function(user, callback)
  {
		var sql = "UPDATE `employee` SET `E_NAME`='"+user.Ename+"', `E_MAIL`='"+user.Email+"', `E_MOB`='"+user.Emob+"' WHERE `EmpID`='"+user.EmpID+"';";
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
