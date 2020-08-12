function validate(){
    if(document.myForm.username.value=="")
    {
        alert("Please provide username!");
        document.myForm.username.focus();
        return false;
    }
    if(document.myForm.password.value=="")
    {
        alert("Please provide valid Password!");
        document.myForm.password.focus();
        return false;
    }
    if(document.myForm.confirmpassword.value=="")
    {
        alert("Please provide valid confirm Password!");
        document.myForm.confirmpassword.focus();
        return false;
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