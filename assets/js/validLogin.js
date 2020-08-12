function validate(){
    if(document.login.username.value=="")
    {
        alert("Please provide username!");
        document.login.username.focus();
        return false;
    }
    if(document.login.password.value=="")
    {
        alert("Please provide valid Password!");
        document.login.password.focus();
        return false;
    }
    return (true);
}