const menuButton = document.querySelector('.menu-button');
const sidebar = document.getElementById('sidebar');
const closeButton = sidebar.querySelector('.close-button');
const header = document.querySelector('header');

const colors = [
    '#6200ff',
    '#5f2eff',
    '#4f00ff',
    '#004f7c',
    '#00aaff',
    '#84c3ff'
];

let currentIndex = 0;

function changeHeaderColor() {
    header.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // Cambia al siguiente color
}

// Cambia de color del texto cada 1000 ms (1 segundo)
setInterval(changeHeaderColor, 1000);

// Asegúrate de que la sidebar no tenga la clase 'active' al inicio (opcional)
sidebar.classList.remove('active');

// Al hacer clic en el botón de menú, se alterna la clase 'active' en el sidebar.
menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Al hacer clic en el botón de cerrar, se elimina la clase 'active' del sidebar.
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Función para animar la entrada de elementos
const animateOnScroll = (elements) => {
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Asegúrate de usar 'active' para activar animaciones
                observer.unobserve(entry.target); // Deja de observar una vez que se ha animado
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Animación de aparición de secciones
const sections = document.querySelectorAll('main section.fade-in'); // Solo seleccionamos las secciones con fade-in
animateOnScroll(sections);

// Animación de entrada para tarjetas
const cards = document.querySelectorAll('.card.animate-entry'); // Seleccionamos las tarjetas con animate-entry
animateOnScroll(cards);