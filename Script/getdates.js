// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  // Set the current year
  document.getElementById('currentyear').textContent = new Date().getFullYear();

  // Set the last modified date and time
  document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
});
