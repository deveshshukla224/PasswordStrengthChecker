function verifypassword() {
var password_picker = document.querySelector("#password_picker").value;
var meter  = document.querySelector("#mtr");
var msg = document.querySelector("#msg");
function showGrade(min,max,value,low,high)
{
    meter.min=min;
    meter.max=max;
    meter.value=value;
    meter.low=low;
    meter.high=high;
}

var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{6,20}$/;

if(password_picker.match(regExp)){
    msg.innerHTML= "Strong Password";
    showGrade(1,100,100,0,0);
}
else {
    if (password_picker.length<4){
    msg.innerHTML="Poor Password";
    showGrade(1,100,100,60,80);

}
else{
    msg.innerHTML="Weak Password";
    showGrade(1,100,100,40,80);
}
}
}



