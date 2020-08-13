function validate(){
    x=document.myForm.newpassword;
    y=document.myForm.confirmnewpassword;
    var message=document.getElementById('err');
    var message1=document.getElementById('err1');
    var color="#ff6666";
    var color1="#66cc66"
    if(document.myForm.oldpassword.value=="")
    {
        alert("Please provide valid Old Password!");
        document.myForm.oldpassword.focus();
        return false;
    }
    if(x.value=="")
    {
        alert("Please provide valid new password!");
        x.focus();
        return false;
    }
    else if(y.value!="")
    {
        if(!(y.value.length >= 4))
        {
            message.style.color=color;
            message.innerHTML="Password Length greater than or Equal 4!";
            y.focus();
            return false;
        }
    }
    if(y.value=="")
    {
        alert("Please provide valid confirm new password!");
        y.focus();
        return false;
    }
    if(x==y)
    {
        message1.style.color=color1;
        message1.innerHTML="Password Match!"
    }
    else
    {
        message1.style.color=color;
        message1.innerHTML="Password Doesn't Match!"
    }
    return (true);
}