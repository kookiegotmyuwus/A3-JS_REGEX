
var input = document.getElementsByTagName("input")
var username = document.getElementById("username")
var age = document.getElementById("age")
var male = document.getElementById("male");
var female = document.getElementById("female");
var number = document.getElementById("phone");
var city = document.getElementById("city");
var email = document.getElementById("email");
var qualification = document.getElementById("qualification");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

var x = 0;var x1 = 0;var x2 = 0;var x3 = 0;var x4 = 0;var x5 = 0;var x6 = 0;var x7 = 0;var x8 = 0;


username.oninput = function(){
    var nameCheck = /^[A-Za-z]+[A-Za-z \.'\,\-]*[A-Za-z\.]+$/
    if(nameCheck.test(username.value)){
            x1=1;
            document.getElementById("vName").innerHTML = "";
            document.getElementById("vName").style.display = "none";}
    else{
        x1=0;
        document.getElementById("vName").style.display = "inline-block";
        document.getElementById("vName").innerHTML = "Enter a valid name";
    }
}
number.oninput = function(){
    var numberCheck = /^(\+?91|\+?91[ -]|0)?[6|7|8|9][0-9]{9}$/
    if(numberCheck.test(number.value)){
        x2=1;
        document.getElementById("vNum").innerHTML = "";
        document.getElementById("vNum").style.display = "none";
    }
    else{
        x2= 0;
        document.getElementById("vNum").style.display = "inline-block";
        document.getElementById("vNum").innerHTML = "Enter a valid phone number.";
    }
}
city.oninput = function(){
    var cityCheck = /^[A-Za-z]+[A-Za-z \.'\,]*(A-z[\.'\,\-]A-z| [\.'\,\-]A-z|A-z[\.'\,\-] )*[A-Za-z\.]+$/
    if(cityCheck.test(city.value)){
            x3=1;
            document.getElementById("vCity").innerHTML = "";
            document.getElementById("vCity").style.display = "none";
    }
    else{
        x3=0;
        document.getElementById("vCity").style.display = "inline-block";
        document.getElementById("vCity").innerHTML = "Enter a valid city name";
        
    }
}
email.oninput = function(){
    var emailCheck = /^[a-zA-Z0-9]+[a-zA-Z0-9\W_]*[a-zA-Z0-9]+@[a-zA-Z]+\.[A-z]+[\.A-z]*[a-zA-Z]+$/
    if(emailCheck.test(email.value)){
       x4=1;
        document.getElementById("vEmail").innerHTML = "";
        document.getElementById("vEmail").style.display = "none";
    }
    else{
        x4=0;
        document.getElementById("vEmail").style.display = "inline-block";
        document.getElementById("vEmail").innerHTML = "Enter a valid email";
    }
}
age.oninput = function(){
    var ageCheck = /^[1-9][0-9]{0,2}$/
    if(ageCheck.test(age.value)){
        x5=1;
        document.getElementById("vAge").innerHTML = "";
        document.getElementById("vAge").style.display = "none";
    }
    else{
        x5 =0;
        document.getElementById("vAge").style.display = "inline-block";
        document.getElementById("vAge").innerHTML = "Enter a valid age";
    }
}
password.oninput = function(){
        if(password.value.length <8){
            x6= 0;
            document.getElementById("vPassword").style.display = "inline-block";
            document.getElementById("vPassword").innerHTML = "Enter a valid password of minimum 8 characters.";
        }
        else{
            x6= 1;
            document.getElementById("vPassword").style.display = "none";
            document.getElementById("vPassword1").style.display = "none";
        }
}    
cpassword.oninput = function(){
    if(password.value == cpassword.value){
        x7= 1;
        document.getElementById("vCPassword").style.display = "none";
    }
    else{
        x7= 0;
        document.getElementById("vCPassword").style.display = "inline-block";
        document.getElementById("vCPassword").innerHTML = "Password are not matching";
    }
}
qualification.oninput = function()
{
    if(qualification.value == "select"){
        x8 = 0;
        document.getElementById("vQualification").style.display = "inline-block";
        document.getElementById("vQualification").innerHTML = "Select Qualification";
    }
    else{
        x8= 1;
        document.getElementById("vQualification").style.display = "none";
        document.getElementById("vQualification").innerHTML = "";
    }
}
male.oninput = function(){
    if(male.checked){
        document.getElementById("vGender").style.display = "none";
        document.getElementById("vGender").innerHTML = "";
    }
}
female.oninput = function(){
    if(female.checked){
        document.getElementById("vGender").style.display = "none";
        document.getElementById("vGender").innerHTML = "";
    }
}
function form1(){
  x=x1+x2+x3+x4+x5+x6+x7+x8;
    if(male.checked || female.checked)
    {
        document.getElementById("vGender").style.display = "none";
        document.getElementById("vGender").innerHTML = "";
        if(x==8){
            return true;
        }
        else if(countQualification==0){
            document.getElementById("x").style.display = "inline-block";
            document.getElementById("x").innerHTML = "Select Qualification";
            return false;
        }
        else{    
            document.getElementById("x").style.display = "inline-block";
            document.getElementById("x").innerHTML = "Fill all the details.";
            return false;
        }
    }
    else{
        document.getElementById("vGender").style.display = "inline-block";
        document.getElementById("vGender").innerHTML = "Select Gender";
        return false;
    }
    
    
}