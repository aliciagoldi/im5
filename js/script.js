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

  //Bilder laden
  function loadImages(month, containerId) {
      fetch(`/json_bilder/${month}.json`)
          .then(response => response.json())
          .then(images => {
              const container = document.getElementById(containerId);
              images.forEach(image => {
                  const imgElement = document.createElement('img');
                  imgElement.src = image.file;
                  imgElement.alt = image.alt;
                  container.appendChild(imgElement);
              });
          })
          .catch(error => console.error(`Fehler beim Laden der Bilder für ${month}:`, error));
  }

  document.addEventListener('DOMContentLoaded', () => {
      loadImages('mai', 'images-mai');
      loadImages('juni', 'images-juni');
      // Rufen Sie loadImages für jeden weiteren Monat auf...
  });


  