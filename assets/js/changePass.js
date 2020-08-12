function validate(){
    if(document.myForm.oldpassword.value=="")
    {
        alert("Please provide valid Old Password!");
        document.myForm.oldpassword.focus();
        return false;
    }
    if(document.myForm.newpassword.value=="")
    {
        alert("Please provide valid new password!");
        document.myForm.newpassword.focus();
        return false;
    }
    if(document.myForm.confirmnewpassword.value=="")
    {
        alert("Please provide valid confirm new password!");
        document.myForm.confirmnewpassword.focus();
        return false;
    }
    return (true);
}