// Logo visibility controller - Shows/hides header logo based on About section visibility
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('#about');
  const headerLogo = document.querySelector('.site-header .logo-link');

  if (!aboutSection || !headerLogo) return;

  function updateLogoVisibility() {
    const aboutRect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if any part of the About section is visible in the viewport
    const isAboutVisible = aboutRect.top < windowHeight && aboutRect.bottom > 0;

    if (isAboutVisible) {
      // About sectie zichtbaar: verberg logo
      headerLogo.style.opacity = '0';
      headerLogo.style.visibility = 'hidden';
    } else {
      // About sectie niet zichtbaar: toon logo  
      headerLogo.style.opacity = '1';
      headerLogo.style.visibility = 'visible';
    }
  }

  // Initial state: verberg logo altijd bij het laden
  headerLogo.style.opacity = '0';
  headerLogo.style.visibility = 'hidden';

  window.addEventListener('scroll', updateLogoVisibility);
  // Check ook bij resize van window
  window.addEventListener('resize', updateLogoVisibility);
  updateLogoVisibility(); // Check direct na laden
});
