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
