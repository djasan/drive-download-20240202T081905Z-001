document.addEventListener('DOMContentLoaded', function () {
    // Récupérer le bouton burger et la nav-list
    const burgerButton = document.getElementById('burgerButton');
    const navList = document.querySelector('.nav-list');

    // Ajouter un écouteur d'événements au clic sur le bouton burger
    burgerButton.addEventListener('click', function (event) {
        // Empêcher la propagation de l'événement de clic vers les éléments enfants
        event.stopPropagation();

        // Toggle (ajouter ou supprimer) la classe "show" sur la nav-list
        navList.classList.toggle('show');
    });

    // Ajouter un écouteur d'événements au clic en dehors de la nav-list pour masquer le menu déroulant
    document.addEventListener('click', function () {
        navList.classList.remove('show');
    });

    // Ajoutez ici votre logique JavaScript en fonction de vos besoins
    // Exemple : Afficher une alerte lorsqu'un bouton est cliqué
    const alertButton = document.querySelector('.alert-button');
    alertButton.addEventListener('click', function () {
        alert('Bouton cliqué!');
    });

    // Exemple : Modifiez le texte d'un élément lorsque la souris passe dessus
    const hoverElement = document.querySelector('.hover-element');
    hoverElement.addEventListener('mouseover', function () {
        hoverElement.innerText = 'Souris dessus!';
    });

    hoverElement.addEventListener('mouseout', function () {
        hoverElement.innerText = 'Passez la souris sur moi';
    });

    // Vous pouvez continuer à ajouter votre logique JavaScript ici
});



