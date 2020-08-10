var db = require('./dbc');

module.exports =
{
	getCustomer: function(user, callback)
  {
		var sql = "SELECT * FROM `customer` WHERE cusid ='"+user.cusid+"';";
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

	updateOwnProfileCustomer: function(user, callback)
  {
		//UPDATE `customer` SET =[value-1],=[value-2],=[value-3],=[value-4],=[value-5],`reg_date`=[value-6] WHERE 1
		var sql = "UPDATE `customer` SET `name`='"+user.name+"', `design`='"+user.design+"', `email`='"+user.email+"', `mobile`='"+user.mobile+"' WHERE `cusid`='"+user.cusid+"';";
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
