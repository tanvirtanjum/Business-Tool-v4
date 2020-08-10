var db = require('./dbc');

module.exports=
{
    passwordChange : function(user,callback){
        var sql = "update log_in set pass='"+user.password+"' where lid='"+user.username+"' ";
        db.execute(sql,function(result){
            if(result){
				callback(true);
			}
            else{
				callback(false);
			}
		});
      }
}