// Mostrar y ocultar secciones
function showSection(sectionId) {
    let sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        section.style.display = (sectionId === 'inicio' || section.id === sectionId) ? 'block' : 'none';
    });
}

// Mostrar detalles de la película
function showMovieDetails(movieId) {
    let movieInfo = {
        'FIVE_NIGHTS_AT_FREDDYS': {
            title: 'Five Nights At Freddy\'s',
            description: 'Esta es una breve descripción de Five Nights At Freddy\'s. Un juego de terror en el que debes sobrevivir cinco noches en un restaurante embrujado.',
            videoUrl: 'https://streamwish.to/e/irxqawtz1a3g'
        },
        'WINNIE_THE_POOH_2': {
            title: 'Winnie the Pooh 2',
            description: 'Esta es una breve descripción de Winnie the Pooh 2. Una dulce historia sobre un oso y sus amigos en el Bosque de los Cien Acres.',
            videoUrl: 'https://voe.sx/e/9miidcp1wv3f'
        }
        // Puedes agregar más películas aquí
    };

    let movie = movieInfo[movieId];
    if (movie) {
        document.getElementById('movieTitle').textContent = movie.title;
        document.getElementById('movieDescription').textContent = movie.description;
        document.getElementById('videoPlayer').src = movie.videoUrl;
        showSection('videoSection');
    }
}

// Manejar clic en una película
document.querySelectorAll('.item').forEach(function(item) {
    item.addEventListener('click', function() {
        let movieId = this.getAttribute('data-id');
        showMovieDetails(movieId);
    });
});

// Configurar los botones de navegación
document.querySelector('nav ul').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        let targetSection = event.target.getAttribute('href').substring(1);
        showSection(targetSection);
    }
});

// Inicializar con la sección de inicio
showSection('inicio');
















