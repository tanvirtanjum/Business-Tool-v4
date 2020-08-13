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

	getLogin: function(user, callback)
  {
		var sql = "SELECT * FROM `log_in` WHERE LID='"+user.lid+"';";
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
	},

	recoverPass: function(user, callback)
  {
		var sql = "UPDATE `log_in` SET `PASS`='"+user.f+"' WHERE `LID`='"+user.a+"';";
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

	changeSID: function(user, callback)
  {
		var sql = "UPDATE `log_in` SET `SID`='"+user.sid+"' WHERE `LID`='"+user.lid+"';";
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

	deleteLogin: function(user, callback)
  {
		var sql = "UPDATE `log_in` SET `SID`='0' WHERE `LID`='"+user.lid+"';";
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

	rejectCusLogin: function(user, callback)
  {
		var sql = "DELETE FROM `log_in` WHERE `LID`='"+user.lid+"';";
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

	insetLogin: function(user, callback)
  {
		var sql = "INSERT INTO `log_in`(`LID`, `SID`, `PASS`) VALUES ('"+user.lid+"','"+user.sid+"','"+user.pass+"');";
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
