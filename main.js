async function getWeather() {  
  const url = 'http://api.openweathermap.org/data/2.5/weather?id=627907&appid=fff0026d1fd72a7c60e7894402f4345c';
  const res = await fetch(url);
  const data = await res.json(); 
  document.querySelector('.weatherTitle').textContent = data.name;
  document.querySelector('.weatherForecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;'+'C';
  document.querySelector('.weatherTime').textContent = data.weather[0]['description'];
  ///document.querySelector('.weatherIcon').innerHTML = data.weather[0]['icon'];

  
}
 getWeather();

navigator.geolocation.getCurrentPosition((position) => {
  document.querySelector('.latitude').innerHTML ='Широта:'+ position.coords.latitude; 
  document.querySelector('.longitude').innerHTML='Долгота:'+ position.coords.longitude;

});



































