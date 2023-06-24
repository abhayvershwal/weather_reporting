const input_box = document.querySelector('#input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_image = document.querySelector('.weather_image');     
const temperature = document.querySelector('.temperature');         
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkweather(city){                     
    console.log(city)                                   
    const api_key ="f22e963512730b088322b5ccbc502172";      
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    
    const weather_data = await  fetch(url);
    const json = await weather_data.json(); 
    console.log(json);      

    if(json.cod==`404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    else{
        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
    }

     
    temperature.innerHTML=`${Math.round(json.main.temp-273.15)}°C`;
    description.innerHTML=`${json.weather[0].description}`;
    humidity.innerHTML=`${json.main.humidity}%`;
    wind_speed.innerHTML=`${json.wind.speed}km/hr`;
    
     switch(json.weather[0].main){

        case 'Clouds': weather_image.src = "assets/cloud.png";
        break;

        case 'Clear': weather_image.src = "assets/clear.png";
        break;

        case 'Rain': weather_image.src = "assets/rain.png";
        break;

        case 'Mist': weather_image.src = "assets/mist.png";
        break;

        case 'Snow': weather_image.src = "assets/snow.png";
        break;

        case 'Haze': weather_image.src = "assets/mist.png";
        break;
    }

    
}      

searchbtn.addEventListener('click', ()=>{ 
    checkweather(input_box.value);                     
})                                         

