var button = document.getElementById('button');
var cityName = document.getElementById('city-name');

var temperature = document.getElementById('current-temp');
var minTemp = document.getElementById('min-temp');
var maxTemp = document.getElementById('max-temp');

var weather = document.getElementById('weather-con');
var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('wind-speed');


button.addEventListener('click', function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName.value+"&units=metric&appid=de29264e7ad7753ad4044b6615ef2a22")
    .then(response => response.json())
    .then(data => {
    /* console.log(data)) */

    var tempVar = data.main.temp; 
    var minTempVar = data.main.temp_min;
    var maxTempVar = data.main.temp_max;

    var weatherVar = data.weather[0].main;
    var humidityVar = data.main.humidity;
    var windVar = data.wind.speed;

    if(weatherVar == 'Haze'){
        document.body.style.backgroundImage = "url('/backgrounds/haze.jpg')";
    }
    if(weatherVar == 'Windy'){
        document.body.style.backgroundImage = "url('/backgrounds/windy.jpg')";
    }
    if(weatherVar == 'Clear'){
        document.body.style.backgroundImage = "url('/backgrounds/clear.jpg')";
    }
    if(weatherVar == 'Fog'){
        document.body.style.backgroundImage = "url('/backgrounds/fog.jpg')";
    }
    if(weatherVar == 'Sunny'){
        document.body.style.backgroundImage = "url('/backgrounds/sunny.jpg')";
    }
    if(weatherVar == 'Snow'){
        document.body.style.backgroundImage = "url('/backgrounds/snow.jpg')";
    }
    if(weatherVar == 'Rain'){
        document.body.style.backgroundImage = "url('/backgrounds/rainy.jpg')";
    }
    if(weatherVar == 'Thunderstorm'){
        document.body.style.backgroundImage = "url('/backgrounds/thunderstorm.jpg')";
    }
    if(weatherVar == 'Drizzle'){
        document.body.style.backgroundImage = "url('/backgrounds/drizzle.jpg')";
    }

    temperature.innerHTML = `Temperature: ${tempVar} &degC`;
    minTemp.innerHTML = `Minimum: ${minTempVar}&degC`;
    maxTemp.innerHTML = `Maximum: ${maxTempVar}&degC`;
    weather.innerHTML = weatherVar;
    humidity.innerHTML = `Humidity: ${humidityVar}%`;
    windSpeed.innerHTML = `Wind Speed: ${windVar}km/h`;
    
    })
    .catch(err => alert("City not found!"));
})