// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ✅ Toggle hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navlinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');

      // Optional: toggle hamburger into "X"
      hamburger.classList.toggle('open');
      hamburger.classList.toggle('open'); 
    });

    // ✅ Close menu after clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open'); // reset hamburger back
      });
    });
  }

  // ✅ Toggle dropdown on click
  const dropdownToggle = document.querySelector('.spa');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (dropdownToggle && dropdownContent) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation(); 
      dropdownContent.classList.toggle('show');

      // Close other dropdowns if any
      document.querySelectorAll('.dropdown-content').forEach(content => {
        if (content !== dropdownContent) {
          content.classList.remove('show');
        }
      });
    });
  }

  // ✅ Close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  });

  // ✅ Handle form submit button
  const submitButton = document.getElementById("btn");
  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Submit button clicked!");
      alert("Thanks contacting AYINKE_STITCHES Form submitted successfully!");
    });
  }
});


