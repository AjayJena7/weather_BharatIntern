document.addEventListener('DOMContentLoaded', function () {
    fetch('http://api.weatherapi.com/v1/current.json?key=e0847d38390e4fab92c54721242403&q=bengaluru&aqi=no')
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const weatherInfo = `
                <p>Location: ${data.location.name}, ${data.location.country}</p>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
            `;
            weatherDiv.innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
