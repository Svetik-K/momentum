const city = document.querySelector('.weather__city');

async function getCityWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=e8a5a3a53a239176e0c4f9263230cf4c&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    document.querySelector('.weather__forecast').innerHTML = `
    <ul>
        <li><i class="owf owf-${data.weather[0].id} owf-3x"></i></li>
        <li>${Math.round(data.main.temp)}&deg;C  ${data.weather[0].description}</li>
        <li>Wind speed: ${data.wind.speed} m/s</li>
        <li>Humidity: ${data.main.humidity}%</li>
    </ul>
    `;
}

export { getCityWeather }

