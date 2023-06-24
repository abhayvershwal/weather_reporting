const input_box = document.querySelector('#input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_image = document.querySelector('.weather_image');     //class se pahale . necessary to connect and access class from html to js  
const temperature = document.querySelector('.temperature');         //
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
//const abhay = document.getElementById('abhay');

async function checkweather(city){                      //2)we make this function async as we want to use await which give us all the data from the api in the form of jason()
    console.log(city)                                   // we use back track sign above tab to insert api and pass values in api example city and my api key
    const api_key ="f22e963512730b088322b5ccbc502172";  //we make he api key from site and define it as it is the format of this api key from site        
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    //const url= `http://localhost:3000/getStudents`;
    
    const weather_data = await  fetch(url);
    const json = await weather_data.json(); 
    console.log(json);      //to see jason(data of weather in format called jason)

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
     // abhay.innerHTML=json[0].student_name;
    
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

searchbtn.addEventListener('click', ()=>{  //1)first we want that as soon as user enter the city and press search buttion the weather get displayed
    checkweather(input_box.value);         //so we will make an eventlistner click which calls a function chech weather...somnow we will make the checkweater function             
})                                         //In check weather we are passing value of the input box+the city which we wil enter there 

