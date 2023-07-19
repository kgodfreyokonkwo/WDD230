// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '42b4b501f1786018c0f91ece2a2bce96';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;

        // Display current weather data
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('description').textContent = `Condition: ${description}`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
      });

    // Fetch 3-day forecast
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=Carlsbad&appid=${apiKey}&units=metric&cnt=3`;

    fetch(forecastUrl)
      .then(response => response.json())
      .then(data => {
        const forecastContainer = document.getElementById('forecast-container');

        data.list.forEach((day, index) => {
          const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
          const temp = day.temp.day;

          // Display forecast data for each day
          const forecastDay = forecastContainer.children[index];
          forecastDay.querySelector('.forecast-date').textContent = date;
          forecastDay.querySelector('.forecast-temp').textContent = `Temp: ${temp}°C`;
        });
      });
  }

  // Fetch weather data when the page loads
  window.addEventListener('load', fetchWeatherData);
