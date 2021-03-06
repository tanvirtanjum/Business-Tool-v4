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

	getEmployeeForRecover: function(user, callback)
  {
		var sql = "SELECT * FROM `employee` WHERE `EmpID` ='"+user.a+"' AND `E_NAME` ='"+user.b+"' AND `DID` ='"+user.c+"' AND  `E_MAIL` ='"+user.d+"' AND  `E_MOB` ='"+user.e+"';";
		db.execute(sql, function(result)
    {
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(true);
			}
		});
	},

	getAllEmployee: function(user, callback)
  {
		var sql = "SELECT * FROM `employee` WHERE `DID` != '0' ORDER BY `DID`;";
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

	updateEmployee: function(user, callback)
  {
		var sql = "UPDATE `employee` SET `E_NAME`='"+user.name+"', `DID`='"+user.did+"', `SAL`='"+user.sal+"', `E_MAIL`='"+user.mail+"', `E_MOB`='"+user.mob+"' WHERE `EmpID`='"+user.EmpID+"';";
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

	deleteEmployee: function(user, callback)
  {
		var sql = "UPDATE `employee` SET `DID`='0' WHERE `EmpID`='"+user.EmpID+"';";
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
