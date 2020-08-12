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

	getAllActiveCustomer: function(user, callback)
  {
		var sql = "SELECT * FROM `customer` WHERE `status` ='1';";
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

	getActiveCustomer: function(user, callback)
  {
		var sql = "SELECT * FROM `customer` WHERE `cusid` ='"+user.cusid+"' AND `status` ='1';";
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

	getAllPendingCustomer: function(user, callback)
  {
		var sql = "SELECT * FROM `customer` WHERE `status` ='0';";
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
		var sql = "INSERT INTO `customer`(`cusid`, `name`, `design`, `email`, `mobile`,`reg_date`,`status`) VALUES ('"+user.cusid+"','"+user.name+"','"+user.design+"','"+user.email+"','"+user.mobile+"',CURRENT_TIMESTAMP(),'0');";
		db.getResults(sql, function(result)
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
