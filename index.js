// // const hamburger = document.querySelector('.hamburger');
// // const navLinks = document.querySelector('.nav-links');

// // hamburger.addEventListener('click', () => {
// //   navLinks.classList.toggle('active');
// // });


// //   // Wait until the DOM is fully loaded
// //   document.addEventListener("DOMContentLoaded", function () {
// //     const submitButton = document.getElementById("btn");

// //     submitButton.addEventListener("click", function (event) {
// //       event.preventDefault(); // Prevent form from submitting
// //       console.log("Submit button clicked!");
// //       alert("Form submitted successfully!");
// //     });
// //   });



// // Toggle hamburger menu
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('navlinks');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });

// // Close menu after clicking a link
// document.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', () => {
//     navLinks.classList.remove('active');
//   });
// });


// // Toggle dropdown on click (works for both mobile and desktop)
// const dropdownToggle = document.querySelector('.spa');
// const dropdownContent = document.querySelector('.dropdown-content');

// if (dropdownToggle && dropdownContent) {
//     dropdownToggle.addEventListener('click', (e) => {
//       e.stopPropagation(); // Prevent bubbling
//       dropdownContent.classList.toggle('show');

//       // Close other dropdowns if any
//       document.querySelectorAll('.dropdown-content').forEach(content => {
//         if (content !== dropdownContent) {
//           content.classList.remove('show');
//         }
//       });
//     });
//   }

//   // Close dropdown if clicking outside
//   document.addEventListener('click', (e) => {
//     if (!e.target.closest('.dropdown')) {
//       document.querySelectorAll('.dropdown-content').forEach(dropdown => {
//         dropdown.classList.remove('show');
//       });
//     }
//   });

//   // Handle form submit button
//   const submitButton = document.getElementById("btn");
//   if (submitButton) {
//     submitButton.addEventListener("click", function (event) {
//       event.preventDefault();
//       console.log("Submit button clicked!");
//       alert("Form submitted successfully!");
//     });
//   }



// // dropdownToggle.addEventListener('click', (e) => {
// //   e.stopPropagation(); // Prevent click from bubbling up
// //   dropdownContent.classList.toggle('show');

// //   // Close others if needed
// //   document.querySelectorAll('.dropdown-content').forEach(content => {
// //     if (content !== dropdownContent) {
// //       content.classList.remove('show');
// //     }
// //   });
// // });

// // // Close dropdown if clicking outside
// // document.addEventListener('click', (e) => {
// //   if (!e.target.closest('.dropdown')) {
// //     document.querySelectorAll('.dropdown-content').forEach(dropdown => {
// //       dropdown.classList.remove('show');
// //     });
// //   }
// // });



// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Toggle hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navlinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Toggle dropdown on click
  const dropdownToggle = document.querySelector('.spa');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (dropdownToggle && dropdownContent) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent bubbling
      dropdownContent.classList.toggle('show');

      // Close other dropdowns if any
      document.querySelectorAll('.dropdown-content').forEach(content => {
        if (content !== dropdownContent) {
          content.classList.remove('show');
        }
      });
    });
  }

  // Close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  });

  // Handle form submit button
  const submitButton = document.getElementById("btn");
  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Submit button clicked!");
      alert("Form submitted successfully!");
    });
  }
});

