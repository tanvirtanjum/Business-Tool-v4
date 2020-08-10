var db = require('./dbc');

module.exports =
{
	getEmployee: function(user, callback)
  {
		var sql = "SELECT * FROM `employee` WHERE EmpID ='"+user.EmpID+"';";
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
