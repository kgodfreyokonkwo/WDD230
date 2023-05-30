// Get the temperature and wind speed elements
const temperatureElement = document.querySelector("#weather-result2 .temperature");
const windSpeedElement = document.querySelector("#weather-result2 .speed");

// Extract the temperature and wind speed values
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

// Calculate the wind chill factor
const windChill = calculateWindChill(temperature, windSpeed);

// Update the wind chill value in the weather section
const windChillElement = document.querySelector("#weather-result2 .chill");
windChillElement.textContent = windChill.toFixed(2);

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
  // Perform the wind chill calculation
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return windChill;
}
