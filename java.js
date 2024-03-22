function fetchWeather() {
    let location = document.getElementById("locationInput").value
    let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=608bbfcf167396295aad432c92c6ca02`);
    data.then(res => res.json()).then(data => {
        document.getElementById("location").innerHTML = data.name
        document.getElementById("temperature").innerHTML = data.main.temp
        document.getElementById("description").innerHTML = data.weather[0].description
        let icon = data.weather[0].icon;
        let iconUrl =`https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById("icon").innerHTML = `<img src="${iconUrl}" alt="Icon">`;
    })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}