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

let contenedorAbout = document.querySelector(".contenedor-about");
let contenedorHabiladades = document.querySelector(".contenedor-habilidades");
let portafolio = document.querySelector(".contenedor-portafolio");
let contacto = document.querySelector(".contacto");

let cargarAbout = (entradas, observador) => {

    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("animado");
        }
    });
}

let observador = new IntersectionObserver(cargarAbout, {
    root: null,
    threshold: 0.1
});

observador.observe(contenedorAbout);
observador.observe(contenedorHabiladades);
observador.observe(portafolio);
observador.observe(contacto);



