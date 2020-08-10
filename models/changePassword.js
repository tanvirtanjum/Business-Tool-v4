var db = require('./dbc');

module.exports=
{
    passwordChange : function(user,callback){
        var sql = "update log_in set pass='"+user.newPassword+"' where lid='"+user.id+"' ";
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