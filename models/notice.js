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
		var sql = "SELECT * FROM `notice` WHERE `noticeID`='"+user.noticeID+"';";
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

	deleteNotice: function(user, callback)
  {
		var sql = "DELETE FROM `notice` WHERE `noticeID`='"+user.noticeID+"';";
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

  updateNotice: function(user, callback)
  {
		var sql = "UPDATE `notice` SET `noteSub`='"+user.noteSub+"',`noticetext`='"+user.noticetext+"' WHERE `noticeID`='"+user.noticeID+"';";
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
