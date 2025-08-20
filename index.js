const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


  // Wait until the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("btn");

    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form from submitting
      console.log("Submit button clicked!");
      alert("Form submitted successfully!");
    });
  });

