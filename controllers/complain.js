var express = require('express');
var router = express.Router();


var complain = require.main.require('./models/complain');
var cInfo=
{
    sub:"",
    text:""
}

router.get('/',function(req,res)
{
    if(req.session.type==1)
    {
        complain.getAllComplains(function(result)
        {
            res.render('adminDash/complainBox/index',{list:result,cInfo:cInfo});
        })
    }
    else
    {
        res.redirect('/login');
    }
});

router.post('/',function(req,res)
{
   if(req.body.hasOwnProperty("READ"))
   {
    if(req.session.type==1)
    {
        var param=
        {
            cID :req.body.complainID
        }
        complain.getComplain(param,function(result){
            cInfo.sub = result[0].sub;
            cInfo.text = result[0].Text;
            res.redirect('/adminDash/complainBox');
        })
    }
    else
    {
        res.send("Something Wrong.....!");
    }
   }
   if(req.body.hasOwnProperty("REFRESH"))
   {
       if(req.session.type==1)
       {
           cInfo.sub="";
           cInfo.text="";
           res.redirect('/adminDash/complainBox');
       }
       else
       {
            res.redirect('/login');
       }
   } 
});
module.exports=router;
