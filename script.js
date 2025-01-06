const apiKey = "fa1e72ff893c6a4a5ed4077327e855b4";

const locationInput = document.getElementById("locationInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

// elem.onclick - действие, которое будет запущено при клике на данный элемент
getWeatherButton.onclick = () => {
    // input.value - значение, написанное внутри input
    const location = locationInput.value.trim();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(weather => {
            // weather - это объект (описание предмета)                   массив (список предметов)
            // TODO: деструктуризация weather + отображение большего кол-ва информации о погоде
            weatherContainer.innerHTML = `
                <h2>${weather.name}</h2>
                <p>${weather.main.temp}°C</p>
                <p>${weather.weather[0].description}</p>
                <p>${weather.wind.speed} m/s</p>
            `;
        })

    // 1. Название города; 
    // 2. Температура; 
    // 3. Описание погоды; 
    // 4. Скорость ветра; 
}
