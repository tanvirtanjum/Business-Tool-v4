function validate(){
    var x=document.login.username;
    var y=document.login.password;
    var message=document.getElementById('err');
    var color="#ff6666";
    if(x.value=="")
    {
        alert("Please provide username!");
        x.focus();
        return false;
    }
    if(y.value=="")
    {
        alert("Please provide valid Password!");
        y.focus();
        return false;
        
    }
    else if(y.value!="")
    {
        if(!(y.value.length >= 4))
        {
            message.style.color=color;
            message.innerHTML="NO NO NO!";
            y.focus();
            return false;
        }
    }
    return (true);
}