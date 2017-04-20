document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '9ba1588b19acdeed92a197ad4cdebefe';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-result').textContent = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`;
        })
        .catch(error => {
            document.getElementById('weather-result').textContent = "City not found";
        });
});
