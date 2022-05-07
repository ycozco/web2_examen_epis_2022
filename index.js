var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("next1");
var Next2 = document.getElementById("next2");

var Back1 = document.getElementById("back1");
var Back2 = document.getElementById("back2");

var progress = document.getElementById("progress");

var register = document.getElementById("register");


Next1.onclick = function() {
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "240px";
}
Back1.onclick = function() {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "120px";
}
Next2.onclick = function() {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "360px";
}
Back2.onclick = function() {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "240px";
}
register.onclick = function() {
var name = document.getElementById("name").value;
var last_name = document.getElementById("last_name").value;
var date_birthday = document.getElementById("birthday").value;
    var age = getAge(date_birthday);
    alert("Hola: "+name+" "+ last_name +" tienes:" + age);
}

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}


