let currentIndex = 0;

function mostrarImagen(index) {
    const images = document.querySelectorAll('.carrusel-imagenes img');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    images.forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });
}
function toggleSearch() {
    const searchForm = document.getElementById('search-form');
    const searchButton = document.getElementById('search-button');
    
    if (searchForm.style.display === 'none' || searchForm.style.display === '') {
        searchForm.style.display = 'flex'; 
        searchButton.style.display = 'none';
    } else {
        searchForm.style.display = 'none'; 
        searchButton.style.display = 'block'; 
    }
}
function moverCarrusel(direction) {
    mostrarImagen(currentIndex + direction);
}

// Muestra la primera imagen al cargar
mostrarImagen(currentIndex);

