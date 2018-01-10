(function(){
  var projets = document.querySelectorAll('.contenu');
  var projetsArr = Array.from(projets);
  var indexProjets = 0;
  if (window.location.href.indexOf('#') !== -1) {
    var idProjet = window.location.href.split('#')[1];
    var i = projetsArr.findIndex(function(projet) {
      return projet.getAttribute('data-name') === idProjet;
    });
    if (i !== -1) {
      indexProjets = i;
    }
  }
  var titrePage = document.querySelector('#titre');
  var conteneurProjets = document.querySelector('.colonne-droite');

  var listesImages = document.querySelectorAll('.thumbs');
  var listeImagesArr = Array.from(listesImages);
  var nbImages = 0;
  var imageIndex = 0;
  var boutonGauche = document.querySelector('#bouton-gauche');
  var boutonDroite = document.querySelector('#bouton-droite');

  projetsArr.forEach(function(projet, index) {
    projet.querySelector('h3').addEventListener('click', function() {
      indexProjets = index;
      afficherProjets();
    });
  });

  afficherProjets();
  afficherImage();

  boutonGauche.addEventListener('click', function() {
      if (imageIndex === 0) {
        imageIndex = nbImages - 1;
      } else {
        imageIndex = imageIndex - 1;
      }
      afficherImage();
  });

  boutonDroite.addEventListener('click', function() {
      if (imageIndex === nbImages - 1) {
        imageIndex = 0;
      } else {
        imageIndex = imageIndex + 1;
      }
      afficherImage();
  });

  function getPhotosForProject(index) {
    return document.querySelector('#photos-projet-' + (index + 1));
  }

  function afficherProjets() {
      projetsArr.forEach(function(projet, index) {
        imageIndex = 0;
        if (index === indexProjets) {
          projet.classList.add('actif');
          listeImagesArr[index].classList.add('actif');
          afficherImage();
          titrePage.innerText = projet.querySelector('h3').innerText;
        } else {
          projet.classList.remove('actif');
          listeImagesArr[index].classList.remove('actif');
        }
      });
  }

  function afficherImage() {
      var images = listeImagesArr[indexProjets].querySelectorAll('li');
      var imagesArr = Array.from(images);
      nbImages = imagesArr.length;
      imagesArr.forEach(function(image, index) {
        image.classList.remove('actif');
        if (index === imageIndex) {
          image.classList.add('actif');
        }
      });
  }

})(this);
