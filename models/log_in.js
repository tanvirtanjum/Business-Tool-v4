var db = require('./dbc');

module.exports =
{
	validateLogin: function(user, callback)
  {
		var sql = "SELECT * FROM `log_in` WHERE LID='"+user.lid+"' AND PASS='"+user.password+"';";
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

	changePass: function(user, callback)
  {
		var sql = "UPDATE `log_in` SET `PASS`='"+user.confirmNewPassword+"' WHERE `LID`='"+user.lid+"' AND `PASS`='"+user.oldPassword+"';";
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
