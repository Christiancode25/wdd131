// Wait for the DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() {

  // Function to display the current year in the footer
  function displayCurrentYear() {
      const currentYearElement = document.getElementById('currentyear');
      if (currentYearElement) {
          currentYearElement.textContent = new Date().getFullYear();
      }
  }

  // Function to display the last modified date in the footer
  function displayLastModified() {
      const lastModifiedElement = document.getElementById('lastModified');
      if (lastModifiedElement) {
          lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
      }
  }

  // Call the functions to update the footer with the current year and last modified date
  displayCurrentYear();
  displayLastModified();

  // Hamburger menu toggle function
  const hamburgerButton = document.querySelector('.hamburger-button');
  const navMenu = document.querySelector('nav ul');

  // Function to toggle the navigation menu visibility
  function toggleMenu() {
      navMenu.classList.toggle('active'); // Toggle the 'active' class on the nav menu
      if (navMenu.classList.contains('active')) {
          hamburgerButton.textContent = 'X'; // Change to 'X' when the menu is open
      } else {
          hamburgerButton.textContent = '☰'; // Change back to hamburger icon when closed
      }
  }

  // Event listener for the hamburger button
  hamburgerButton.addEventListener('click', toggleMenu);
});
