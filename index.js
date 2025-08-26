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

  });

  // Get the form element by its ID
const form = document.getElementById("enquiry-form");

// Get the placeholder <p> tag where messages will be shown
const message = document.getElementById("formMessage");

// Check if the form actually exists on the page (good practice to avoid errors)
if (form) {
  // Add a "submit" event listener to the form
  form.addEventListener("submit", async function (event) {
    // Prevent the form's default behavior (refreshing the page)
    event.preventDefault();

    // Collect all the input values from the form
    const formData = new FormData(form);

    try {
      // Send form data to the server (Formspree) using fetch
      const response = await fetch(form.action, {
        method: form.method, // Uses the method defined in <form> (POST)
        body: formData,      // Sends the collected form data
        headers: {
          'Accept': 'application/json' // Tell Formspree we want JSON response
        }
      });

      // If the request was successful (status 200)
      if (response.ok) {
        // Show a green success message
        message.style.display = "block";
        message.style.color = "green";
        message.textContent = "Form submitted successfully! 🎉";

        // Clear all input fields in the form
        form.reset();

        // Hide the success message after 3 seconds
        setTimeout(() => {
          message.style.display = "none";
        }, 3000);
      } else {
        // If Formspree didn't accept submission, show error in red
        message.style.display = "block";
        message.style.color = "red";
        message.textContent = "Oops! Something went wrong.";
      }
    } catch (error) {
      // If there was a network/connection problem, show error in red
      message.style.display = "block";
      message.style.color = "red";
      message.textContent = "Network error. Please try again.";
    }
  });
}

 

  




