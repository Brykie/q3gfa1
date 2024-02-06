var firstname = document.getElementById("firstname").value
var lastname = document.getElementById("lastname").value
var birth = document.getElementById("birth").value

var cryear = new Date().getFullYear();
var age = (cryear - birth);

if (firstname && lastname && birth) {
    alert()
} else {
    alert("goofy")
}

