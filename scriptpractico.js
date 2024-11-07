function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

function rateProduct(stars) {
    let allStars = document.querySelectorAll('.star');
    allStars.forEach((star, index) => {
        star.style.color = (index < stars) ? 'gold' : 'gray';
    });
}
function changeImage(imageSrc){
    document.getElementById("main-image").src=imageSrc;
    const thumbnails =document.querySelectorAll('.tumbnail');
    thumbnails.forEach(thumbnails=>{
        thumbnails.classList.remove('selected');
    });
 const selectedThumbnail = document.querySelector('img[src="${imageSrc}"]');
 selectedThumbnail.classList.add('selected'); 
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
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto agregado al carrito');
    });
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('phone-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    let isValid = true;

    if (name === '' || name.length > 50) {
        document.getElementById('name-error').textContent = 'El nombre es obligatorio y debe tener menos de 50 caracteres.';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Por favor, introduce un correo electrónico válido.';
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phone-error').textContent = 'El número de teléfono debe tener exactamente 10 dígitos.';
        isValid = false;
    }

    if (message === '' || message.length > 300) {
        document.getElementById('message-error').textContent = 'El mensaje es obligatorio y debe tener menos de 300 caracteres.';
        isValid = false;
    }

    if (isValid) {
        showSubmittedData(name, email, phone, message);
        document.getElementById('contact-form').reset();
    }

    return false; 
}

