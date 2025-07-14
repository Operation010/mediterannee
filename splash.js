// Splash Screen Animation Controller
document.addEventListener('DOMContentLoaded', function() {
  console.log('Splash animation loaded');
  
  const splashScreen = document.getElementById('splash-screen');
  const body = document.body;
  
  // Verberg splash screen na 9 seconden en markeer body als complete
  setTimeout(() => {
    if (splashScreen) {
      splashScreen.style.display = 'none';
      body.classList.add('splash-complete');
      console.log('Splash animation complete');
    }
  }, 9000); // 9 seconden totaal: logo focus + extra seconde + welkom + smooth transition
  
  // Optioneel: Skip splash screen bij klik (voor development/testing)
  if (splashScreen) {
    splashScreen.addEventListener('click', () => {
      splashScreen.style.animation = 'splashZoomOut 0.5s ease-in-out forwards';
      setTimeout(() => {
        splashScreen.style.display = 'none';
        body.classList.add('splash-complete');
      }, 500);
    });
  }
});
