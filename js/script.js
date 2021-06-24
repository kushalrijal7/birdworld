var button = document.getElementById("info");
var myDiv = document.getElementById("myDiv");
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function show() {
  myDiv.style.visibility = "visible";
}

function hide() {
  myDiv.style.visibility = "hidden";
}

function toggle() {
  if (myDiv.style.visibility === "hidden") {
    show();
  } else {
    hide();
  }
}

hide();

button.addEventListener("click", toggle, false);
