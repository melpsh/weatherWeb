const $ = document;
let input = $.querySelector('.search-box');
let cityName = $.querySelector('.city');
let nowDate = new Date();
let dateLable = $.querySelector('.date');
let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let temp = $.querySelector('.temp');
let weatherDes = $.querySelector('.weather');
let highLow = $.querySelector('.hi-low');
let icon = $.querySelector('.icon');
var video = $.querySelector('.video-background');
var videoSource = $.querySelector('.video-source');


function fetchData(){
    let cityValue = input.value;
    const myApiKey = '4e19774926435f77fb85b7a4a55ef2e6';
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
        showData(data);
    })
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
    if(apiData.weather[0].description === 'clear sky'){
        
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

function showData(apiData){
    console.log(apiData);
    cityName.innerHTML = apiData.name +" "+ apiData.sys.country;
    dateLable.innerHTML = weekDays[nowDate.getDay()]+ " "+nowDate.getUTCDate() +" " +months[nowDate.getMonth()]+ " "+nowDate.getFullYear();
    temp.innerHTML = Math.floor(apiData.main.temp - 273.15) + ` °c`;
    let weatherIcone = apiData.weather[0].description;
    weatherDes.innerHTML = weatherIcone;
    highLow.innerHTML = Math.floor(apiData.main.temp_min - 273.15)+"°c"+ ' / '+ Math.floor(apiData.main.temp_max - 273.15)+' °c';
    icon.innerHTML = "url('https://openweathermap.org/img/wn/10d@2x.png')";
    console.log(apiData.weather[0].main);
    // setBackgroundVideo(apiData);
    setBackGroundPhoto(apiData);
}

input.addEventListener('keypress',(event) => {
    if(event.keyCode === 13){
        fetchData();
    }
})
