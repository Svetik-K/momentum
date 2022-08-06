async function getWeather() {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=e8a5a3a53a239176e0c4f9263230cf4c&units=metric');
    const data = await res.json();
    console.log()
    document.querySelector('.weather__city').innerHTML = `
    <p>${data.name}</p>
    <hr>
    `;
    document.querySelector('.weather__forecast').innerHTML = `
    <ul>
        <li><i class="owf owf-${data.weather[0].id} owf-3x"></i></li>
        <li>${Math.round(data.main.temp)}&deg;C  ${data.weather[0].description}</li>
        <li>Wind speed: ${data.wind.speed} m/s</li>
        <li>Humidity: ${data.main.humidity}%</li>
    </ul>
    `;
}

export {getWeather}

