document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page file name
    const navItems = {
      'register.html': 'register-link',
      'login.html': 'login-link',
      'appointment.html': 'appointment-link',
    };
  
    if (navItems[currentPage]) {
      const currentNavItem = document.getElementById(navItems[currentPage]);
      if (currentNavItem) {
        currentNavItem.style.display = 'none'; // Hide the current page link
      }
    }
  });
  