const imagenesCarrusel = [
    "images/perri.png",
    "images/bebes.png",
    "images/oferta.png"
];

let currentIndex = 0;


function inicializarCarrusel() {
    const contenedorCarrusel = document.getElementById("carrusel-imagenes");
    contenedorCarrusel.innerHTML = "";  

  
    imagenesCarrusel.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Imagen ${index + 1}`;
        img.classList.add("carrusel-imagen");  
        if (index === 0) img.classList.add("active"); 
        contenedorCarrusel.appendChild(img);
    });
}


function mostrarImagen(index) {
    const images = document.querySelectorAll('.carrusel-imagenes .carrusel-imagen'); 
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


function moverCarrusel(direction) {
    mostrarImagen(currentIndex + direction);
}


document.addEventListener("DOMContentLoaded", () => {
    inicializarCarrusel();  
    mostrarImagen(currentIndex);  
});

