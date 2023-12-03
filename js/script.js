//------------------------------AKKORDEON------------------------------
document.addEventListener('DOMContentLoaded', (event) => {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const accordionLink = item.querySelector('.accordion-link');
  
      accordionLink.addEventListener('click', (e) => {
        e.preventDefault();
  
        // Umschalten des ausgewählten Akkordeons
        item.classList.toggle('open');
  
        // Schließen aller anderen Akkordeons
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
          }
        });
      });
    });
  });
  //------------------------------BILDER LADEN------------------------------
  function loadImages(month, containerId) {
      fetch(`/json_bilder/${month}.json`)
          .then(response => response.json())
          .then(images => {
              const container = document.getElementById(containerId);
              images.forEach(image => {
                  const imgElement = document.createElement('img');
                  imgElement.src = image.file;
                  imgElement.alt = image.alt;
                  imgElement.loading = "lazy";
                  imgElement.setAttribute('data-date', image.date);
                  imgElement.setAttribute('data-name', image.name);
                  container.appendChild(imgElement);
                  imgElement.onclick = () => openLightbox(imgElement);
              });
          })
          .catch(error => console.error(`Fehler beim Laden der Bilder für ${month}:`, error));
  }
  document.addEventListener('DOMContentLoaded', () => {
      loadImages('mai', 'images-mai');
      loadImages('jun', 'images-jun');
      loadImages('jul', 'images-jul');
      loadImages('aug', 'images-aug');
      loadImages('sep', 'images-sep');
      loadImages('okt', 'images-okt');
      loadImages('nov', 'images-nov');
  });

 //------------------------------LIGHT BOX------------------------------
// Funktion zum Öffnen der Lightbox
function openLightbox(elem) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');

  lightbox.style.display = "block";
  lightboxImg.src = elem.src;
  lightboxCaption.innerHTML = elem.getAttribute('data-date') + " . " + elem.getAttribute('data-name');
}


// Funktion zum Schließen der Lightbox
function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = "none";
}

// Event-Listener hinzufügen, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown img').forEach(img => {
      img.onclick = () => openLightbox(img);
  });
});

  


  