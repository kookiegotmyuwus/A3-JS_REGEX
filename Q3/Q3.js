var x= 0;
var email1 = document.getElementById("mail");
var emailCheck = /^[a-zA-Z0-9]+[a-zA-Z0-9\W_]*[a-zA-Z0-9]+@[a-zA-Z]+\.[A-z]+[\.A-z]*[a-zA-Z]+$/;


email1.oninput = function(){
    
    if(emailCheck.test(email1.value)){
        x=1;
        document.getElementById("vEmail").innerHTML = "";
        document.getElementById("vEmail").style.display = "none";
    }
    else{
        x =0;
        document.getElementById("vEmail").style.display = "inline-block";
        document.getElementById("vEmail").innerHTML = "Enter a valid email";
    }
}

function incheck(){
    var count = 0;
    var password = document.getElementById("password").value;
    var email = document.getElementById("mail").value;
    if(x == 1){
        var xhr = new XMLHttpRequest();

        xhr.open("POST", "https://reqres.in/api/login", true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`email=${email}&password=${password}`);
        
        
        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200)
            {
                alert("Login successful  Response:" + this.response);
            }
            else if(this.status != 200 && this.readyState == 4){
                if(count ==0){
                    alert("Login Failed! Check input");
                }
                count = 1;
            }
        }
    }
    else{
        alert("Error! Check input");
    }
    
}