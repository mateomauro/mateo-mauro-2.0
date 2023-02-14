"use strict"

window.addEventListener("scroll", oscurecerNav);
document.querySelector(".btn-home").addEventListener("click", quitarMenu);
document.querySelector(".btn-about").addEventListener("click", quitarMenu);
document.querySelector(".btn-portafolio").addEventListener("click", quitarMenu);
document.querySelector(".btn-contacto").addEventListener("click", quitarMenu);


function quitarMenu(){
    let check = document.querySelector("#check");
    check.checked = false;
}

function oscurecerNav () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("abajo-nav", window.scrollY>100);
}




