var db = require('./dbc');

module.exports =
{
	validateLogin: function(user, callback)
  {
		var sql = "SELECT * FROM `log_in` WHERE LID='"+user.lid+"' AND PASS='"+user.password+"'";
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
	}
}
