
// Obtener elementos del carrusel

const slides = document.querySelectorAll('.slide');

const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');

const indicadores = document.getElementById('indicadores');

// Variables de control

let indiceActual = 0;
let intervalo;

// Cantidad de imágenes

const totalSlides = slides.length;


// Crear indicadores automáticamente

slides.forEach((slide, indice) => {

    const boton = document.createElement('button');

    boton.classList.add('indicador');

    boton.setAttribute('aria-label', `Ir a la imagen ${indice + 1}`);

    if (indice === 0) {
        boton.classList.add('activo');
    }

    boton.addEventListener('click', () => {
        mostrarSlide(indice);
        reiniciarAutomatico();
    });

    indicadores.appendChild(boton);

});


// Obtener todos los indicadores

const puntos = document.querySelectorAll('.indicador');


// Mostrar imagen seleccionada

function mostrarSlide(indice) {

    // Quitar clase activa de todas las imágenes

    slides.forEach(slide => {
        slide.classList.remove('activo');
    });

    // Quitar clase activa de los indicadores

    puntos.forEach(punto => {
        punto.classList.remove('activo');
    });

    // Actualizar índice

    indiceActual = indice;

    // Mostrar imagen seleccionada

    slides[indiceActual].classList.add('activo');

    // Activar indicador correspondiente

    puntos[indiceActual].classList.add('activo');

}


// Avanzar imagen

function siguienteSlide() {

    indiceActual++;

    if (indiceActual >= totalSlides) {
        indiceActual = 0;
    }

    mostrarSlide(indiceActual);

}


// Retroceder imagen

function anteriorSlide() {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = totalSlides - 1;
    }

    mostrarSlide(indiceActual);

}


// Reiniciar reproducción automática

function reiniciarAutomatico() {

    clearInterval(intervalo);

    intervalo = setInterval(siguienteSlide, 5000);

}


// Eventos de los botones

btnSiguiente.addEventListener('click', () => {

    siguienteSlide();

    reiniciarAutomatico();

});


btnAnterior.addEventListener('click', () => {

    anteriorSlide();

    reiniciarAutomatico();

});


// Iniciar carrusel automático

if (totalSlides > 0) {

    reiniciarAutomatico();

}
