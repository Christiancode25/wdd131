// Get the current year and last modified date and add them to the footer
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = lastModified;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    // Formula for wind chill in Celsius
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Function to display wind chill if conditions are met
function displayWindChill() {
    const temp = 10; // Static temperature in Celsius
    const windSpeed = 5; // Static wind speed in km/h
    let windChillValue = 'N/A';

    // Check if the conditions for wind chill are met
    if (temp <= 10 && windSpeed > 4.8) {
        windChillValue = calculateWindChill(temp, windSpeed);
    }

    // Update the wind chill element in the HTML
    document.getElementById('windChill').textContent = windChillValue + ' °C';
}

// Call the function when the page loads
window.onload = function() {
    displayWindChill();
};
