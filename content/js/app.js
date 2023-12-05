const $ = document;
let input = $.querySelector('.search-box');
let cityName = $.querySelector('.city');
let nowDate = new Date();
let dateLable = $.querySelector('.date');
let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let temp = $.querySelector('.maintemp');
let weatherDes = $.querySelector('.weather');
let lowtempDegree = $.querySelector('.lowtemp-degree');
let hightempDegree = $.querySelector('.hightemp-degree');
let feelsLike = $.querySelector('.feels-like');
let humidity = $.querySelector('.humidity');
let windSpeed = $.querySelector('.wind-speed');
let icon = $.querySelector('.icon');
var video = $.querySelector('.video-background');
var videoSource = $.querySelector('.video-source');
var cityValue = input.value;

async function fetchWeatherData(cityValue){
    const myApiKey = '4e19774926435f77fb85b7a4a55ef2e6';

    if (!input.value) {
        try {
            let browserLocation = await getBrowserLocation();
            cityValue = browserLocation.city;
        } catch (error) {
            console.error('Error getting browser location:', error);
            return;
        }
    }else{
        cityValue = input.value;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${myApiKey}`)
    .then(res => {
        console.log('RES',res);
        if(res.status == 200){
            return res.json();
        }else{
            alert('This City does not exist. Please check the spelling.')
            return new Error('Status Error');
        }
    }).then(data => {
        console.log('weather data:',data)
        showData(data);
    })
}

function updateCityValue(){
 return cityValue = input.value;
}

function setBackgroundVideo(apiData){
    if(apiData.weather[0].description === 'clear sky'){
        videoSource.src = 'content/video/sunny.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'light rain'){
        videoSource.src = 'content/video/lightRain.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'moderate rain'){
        videoSource.src = 'content/video/modarateRain.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'broken clouds'){
        videoSource.src = 'content/video/clouds.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'overcast clouds'){
        videoSource.src = 'content/video/overcastClouds.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'scattered clouds'){
        videoSource.src = 'content/video/scatteredCoulds.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'shower rain'){
        videoSource.src = 'content/video/showerRain.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'rain'){
        videoSource.src = 'content/video/rain.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'snow'){
        videoSource.src = 'content/images/snow.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    }else if(apiData.weather[0].description === 'mist'){
        videoSource.src = 'content/video/mist.mp4';
        video.load();
        video.addEventListener('loadedmetadata', function() {
            video.play();
          });
    } 
}

function setBackGroundPhoto(apiData){
    let desc = apiData.weather[0].description;
    if(desc === 'clear sky'){
        document.body.style.backgroundImage = 'url("content/images/sunny.jpg")';
        icon.src= 'content/icons/sun.png';
    }else if(desc === 'light rain'){
        document.body.style.backgroundImage = 'url("content/images/rain.jpeg")';
        icon.src= 'content/icons/rainy.png';
    }else if(desc === 'moderate rain'){
        document.body.style.backgroundImage = 'url("content/images/rain.jpeg")';
        icon.src= 'content/icons/rainy.png';
    }else if(desc === 'broken clouds'){
        document.body.style.backgroundImage = 'url("content/images/cloudy.jpg")';
        icon.src= 'content/icons/cloudy.png';
    }else if(desc === 'overcast clouds'){
        document.body.style.backgroundImage = 'url("content/images/cloudy.jpg")';
        icon.src= 'content/icons/cloudy.png';
    }else if(desc === 'scattered clouds'){
        document.body.style.backgroundImage = 'url("content/images/cloudy.jpg")';
        icon.src= 'content/icons/cloudy.png';
    }else if(desc === 'shower rain'){
        document.body.style.backgroundImage = 'url("content/images/rain.jpeg")';
        icon.src= 'content/icons/rain.png';
    }else if(desc === 'rain'){
        document.body.style.backgroundImage = 'url("content/images/rain.jpeg")';
        icon.src= 'content/icons/rain.png';
    }else if(desc === 'snow'){
        document.body.style.backgroundImage = 'url("content/images/snow.jpg")';    
        icon.src= 'content/icons/snowflake.png';    
    }else if(desc === 'mist' || desc === 'haze'){
        document.body.style.backgroundImage = 'url("content/images/mist.jpg")';     
        icon.src= 'content/icons/mist.png';   
    }else{
        document.body.style.backgroundImage = 'url("content/images/sunny.jpg")';
        icon.src = 'content/icons/snowflake.png';
    }
}



function showData(apiData){
    console.log(apiData);
    // cityName.innerHTML = apiData.name +" "+ apiData.sys.country;
    cityName.innerHTML = apiData.name;
    dateLable.innerHTML = weekDays[nowDate.getDay()]+ " "+nowDate.getUTCDate() +" " +months[nowDate.getMonth()]+ " "+nowDate.getFullYear();
    temp.innerHTML = Math.floor(apiData.main.temp - 273.15) + `°c`;
    let weatherIcone = apiData.weather[0].description;
    weatherDes.innerHTML = weatherIcone;
    lowtempDegree.innerHTML = Math.floor(apiData.main.temp_min - 273.15)+"°c";
    hightempDegree.innerHTML = Math.floor(apiData.main.temp_max - 273.15)+' °c';
    hightempDegree.innerHTML = Math.floor(apiData.main.temp_max - 273.15)+' °c';
    hightempDegree.innerHTML = Math.floor(apiData.main.temp_max - 273.15)+' °c';
    feelsLike.innerHTML = "FEELS LIKE: "+Math.floor(apiData.main.feels_like - 273.15)+' °c';
    humidity.innerHTML = "HUMIDITY: "+apiData.main.humidity+'%';
    windSpeed.innerHTML = "WIND:"+'SW '+apiData.wind.speed+'MHP';
    // icon.innerHTML = "url('https://openweathermap.org/img/wn/10d@2x.png')";
    console.log(apiData.weather[0].main);
    // setBackgroundVideo(apiData);
    setBackGroundPhoto(apiData);
}

getBrowserLocation();
console.log(getBrowserLocation());

input.addEventListener('keypress',(event) => {
    if(event.keyCode === 13){
        fetchWeatherData(cityValue);
    }
})

function getBrowserLocation() {
  return new Promise((resolve, reject) => {
    let success = (position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longtitude=${longitude}&localitylanguage=en`;

      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    };

    let error = () => {
      console.log('Unable to retrieve location.');
      reject('Unable to retrieve location.');
    };

    navigator.geolocation.getCurrentPosition(success, error);
  });
}

// function initAutocomplete() {
//     const autoCompeletUrl = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places"`;
//     const input = document.getElementById('cityInput');
//     const autocomplete = new google.maps.places.Autocomplete(input);
  
//     // Optional: Set additional options for the autocomplete
//     // autocomplete.setOptions({/* options */});
  
//     // Optional: Add an event listener to handle when a suggestion is selected
//     autocomplete.addListener('place_changed', function() {
//       const place = autocomplete.getPlace();
//       console.log('Selected Place:', place);
//       // You can use the selected place information as needed
//     });
//   }
  
//   // Initialize the Google Places Autocomplete API
//   google.maps.event.addDomListener(window, 'load', initAutocomplete);

window.addEventListener('load', async () => {
  try {
    let browserLocation = await getBrowserLocation();
    console.log('Browser Location:', browserLocation.city);
    fetchWeatherData(browserLocation.city);
  } catch (error) {
    console.error('Error getting browser location:', error);
  }
});
