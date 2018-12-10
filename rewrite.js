var darkBg = document.getElementById("darkBg");
var mainMenu = document.getElementById("mainMenu");
var body = document.getElementById("body");

function handleMenu(e){
    e.preventDefault();
    darkBg.classList.add("on");
    mainMenu.classList.add("on");
    body.style.overflow = "hidden";
}

function handleClear(){
    darkBg.classList.remove("on");
    mainMenu.classList.remove("on");
    body.style.overflow = "auto";
}