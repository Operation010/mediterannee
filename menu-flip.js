// Menu flip functionaliteit
document.addEventListener('DOMContentLoaded', function() {
  console.log('Menu flip script loaded');
  
  // Wacht even tot alle elementen geladen zijn
  setTimeout(() => {
    const menuItems = document.querySelectorAll('.menu-grid li');
    console.log('Found menu items:', menuItems.length);
    
    menuItems.forEach((item, index) => {
      item.addEventListener('click', function(e) {
        console.log('Menu item clicked:', index);
        
        // Check of het item een menu-card heeft (flip structuur)
        const menuCard = this.querySelector('.menu-card');
        if (menuCard) {
          console.log('Item has menu-card, flipping');
          this.classList.toggle('flipped');
        } else {
          console.log('Item has old structure, no flip available yet');
          // Hier kun je later een andere actie doen voor items zonder flip
        }
      });
    });
  }, 100);
});
