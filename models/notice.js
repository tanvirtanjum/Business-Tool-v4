var db = require('./dbc');

module.exports =
{
  getAllNotice: function(user, callback)
  {
		var sql = "SELECT * FROM `notice;";
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

	getNotice: function(user, callback)
  {
		var sql = "SELECT * FROM `notice` WHERE noticeID='"+user.noticeID+"';";
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

	insetNotice: function(user, callback)
  {
		var sql = "INSERT INTO `notice`(`noteSub`, `noticetext`) VALUES ('"+user.noteSub+"','"+user.noticetext+"');";
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
