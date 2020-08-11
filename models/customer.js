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

	signCustomer: function(user, callback)
  {
		var sql = "INSERT INTO `customer`(`cusid`, `name`, `design`, `email`, `mobile`) VALUES ('"+user.cusid+"','"+user.name+"','"+user.design+"','"+user.email+"','"+user.mobile+"');";
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
