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
  