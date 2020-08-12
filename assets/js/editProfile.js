function validate(){
    if(document.myForm.fullname.value=="")
    {
        alert("Please provide Full Name!");
        document.myForm.fullname.focus();
        return false;
    }
    if(document.myForm.email.value=="")
    {
        alert("Please provide valid Email!");
        document.myForm.email.focus();
        return false;
    }
    if(document.myForm.mobile.value=="")
    {
        alert("Please provide valid Mobile Number!");
        document.myForm.mobile.focus();
        return false;
    }
    return (true);
}