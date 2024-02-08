 // Function to smooth scroll to target element
 function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Add event listeners to navigation links
  document.querySelectorAll('ul a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get target section id
      smoothScroll(targetId); // Scroll to target section smoothly
    });
  });

  