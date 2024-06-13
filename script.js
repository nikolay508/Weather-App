const apiKey = "990859935d868b088c1aeb62b313b126";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        let data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + 'c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if(data.weather[0].main === 'Clouds'){
            weatherIcon.src = 'https://i.pinimg.com/originals/d5/cf/12/d5cf12d6f7b25ae1d78dd18d2a46c690.png';
        }else if(data.weather[0].main === 'Clear'){
            weatherIcon.src = 'https://static.vecteezy.com/system/resources/thumbnails/020/032/515/small_2x/sun-logo-template-of-sunrise-sunset-sunbursts-cute-sunshine-for-kids-cartoon-graphic-shape-sun-silhouette-sticker-png.png';
        }else if(data.weather[0].main === 'Rain'){
            weatherIcon.src = 'https://cdn-icons-png.freepik.com/512/4150/4150904.png';
        }else if(data.weather[0].main === 'Drizzle'){
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/106/106044.png';
        }else if(data.weather[0].main === 'Mist'){
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/512/6642/6642957.png';
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
