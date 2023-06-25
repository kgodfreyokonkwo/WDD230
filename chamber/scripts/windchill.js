// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  // Check if temperature and wind speed are valid numbers
  if (typeof temperature !== 'number' || typeof windSpeed !== 'number') {
    return "N/A";
  }

  // Calculate wind chill using the formula
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  return Math.round(windChill * 10) / 10; // Round to one decimal place
}

// Function to make the API call and update the weather information
function getWeather() {
  const cityName = "Salt Lake City";
  const apiKey = "42b4b501f1786018c0f91ece2a2bce96";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  // Make the API call
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Update the weather information in the HTML
      document.getElementById("weather-result1").innerHTML = `<img id="weather-img" src="images/weather.png" alt="The weather logo">${data.weather[0].description}`;
      document.querySelector(".temperature").textContent = `${Math.round(data.main.temp - 273.15)}°C`;
      document.querySelector(".speed").textContent = `${data.wind.speed}km/hr`;

      // Calculate wind chill
      const temperature = Math.round(data.main.temp - 273.15);
      const windSpeed = data.wind.speed;
      const windChill = calculateWindChill(temperature, windSpeed);
      document.querySelector(".chill").textContent = windChill !== "N/A" ? `${windChill}°C` : windChill;
    })
    .catch(error => {
      console.log("Error fetching weather data:", error);
    });
}

// Call the getWeather function to retrieve and display the weather information
getWeather();
