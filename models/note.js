var db = require('./dbc');

module.exports =
{
  getAllNote: function(user, callback)
  {
		var sql = "SELECT * FROM `note` WHERE `OwnerID`='"+user.OwnerID+"';"
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

	getNote: function(user, callback)
  {
		var sql = "SELECT * FROM `note` WHERE `NoteID`='"+user.NoteID+"' AND `OwnerID`='"+user.OwnerID+"';"
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

	deleteNote: function(user, callback)
  {
		var sql = "DELETE FROM `note` WHERE `NoteID`='"+user.NoteID+"' AND `OwnerID`='"+user.OwnerID+"';";
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

  updateNote: function(user, callback)
  {
		var sql = "UPDATE `note` SET `NoteName`='"+user.NoteName+"',`Text`='"+user.Text+"' WHERE `NoteID`='"+user.NoteID+"' AND `OwnerID`='"+user.OwnerID+"';";
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

	insetNote: function(user, callback)
  {
		var sql = "INSERT INTO `note`(`NoteName`, `OwnerID`, `Text`) VALUES ('"+user.NoteName+"','"+user.OwnerID+"','"+user.Text+"');";
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
