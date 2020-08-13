function validate(){

    var x=document.myForm.password;
    var y=document.myForm.confirmpassword;
    var message=document.getElementById('err');
    var message1=document.getElementById('err1');
    var color="#ff6666";
    var color1="#66cc66"

    if(document.myForm.username.value=="")
    {
        alert("Please provide username!");
        document.myForm.username.focus();
        return false;
    }
    if(x.value=="")
    {
        alert("Please provide valid Password!");
        x.focus();
        return false;
    }
    else if(y.value!="")
    {
        if(!(y.value.length >= 4))
        {
            message.style.color=color;
            message.innerHTML="Password Length must be greater than or Equal 4!";
            y.focus();
            return false;
        }
    }
    if(y.value=="")
    {
        alert("Please provide valid confirm Password!");
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
    if(document.myForm.fullname.value=="")
    {
        alert("Please provide Full Name!");
        document.myForm.fullname.focus();
        return false;
    }
    if(document.myForm.design.value=="")
    {
        alert("Please provide Designation!");
        document.myForm.design.focus();
        return false;
    }
    if(document.myForm.email.value=="")
    {
        alert("Please provide valid Email!");
        document.myForm.email.focus();
        return false;
    }
    if(document.myForm.mobilenumber.value=="")
    {
        alert("Please provide valid Mobile Number!");
        document.myForm.mobilenumber.focus();
        return false;
    }
    return (true);
}