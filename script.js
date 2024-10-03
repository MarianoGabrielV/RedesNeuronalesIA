
let neuronas = document.getElementById('neuronas');
let titulo = document.getElementById('titulo');
let video = document.getElementById('video');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    neuronas.style.top = value * 1 + 'px';
    
    let opacity = 1 - value / 500; // Ajusta 500 para cambiar la velocidad de desvanecimiento
    video.style.opacity = opacity < 0 ? 0 : opacity; // Asegura que la opacidad no sea menor que 0
    
    let scale = 1 - value / 1000; // Achicar el título (ajusta 1000 para la velocidad de reducción)
    
    // Asegúrate de que la opacidad no sea menor que 0 y que la escala no sea menor que 0.5
    titulo.style.opacity = opacity < 0 ? 0 : opacity; 
    titulo.style.transform = `scale(${scale < 0.5 ? 0.5 : scale})`; // Mínimo 50% del tamaño original

    
});

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const parte1Link = document.querySelector('a[href="#preguntas"]'); // Selecciona el enlace a "parte1"

    parte1Link.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const target = document.querySelector('#preguntas'); // Selecciona el objetivo

        // Realiza el desplazamiento suave
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
