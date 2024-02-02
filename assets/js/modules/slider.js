document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez les éléments du slider
    const sliderContainer = document.querySelector('.slider-container');
    const sliderGrid = document.querySelector('.slider-grid');

    // Variables pour le défilement du slider
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Fonction pour déplacer le slider à l'index spécifié
    const moveSlider = (index) => {
        currentIndex = index;
        const translateValue = -currentIndex * 100 + '%';
        sliderGrid.style.transform = 'translateX(' + translateValue + ')';
    };

    // Écouteurs d'événements pour les boutons de navigation
    document.querySelector('.prev-button').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        moveSlider(currentIndex);
    });

    document.querySelector('.next-button').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveSlider(currentIndex);
    });

    // Optionnel : Ajoutez des écouteurs d'événements pour les touches du clavier (gauche/droite)
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            moveSlider(currentIndex);
        } else if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % totalSlides;
            moveSlider(currentIndex);
        }
    });
});