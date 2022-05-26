var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  var townEvents = request.response;
  townPreston(townEvents);
};

let weatherRequest = new XMLHttpRequest();
let apiURLstring =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6";
weatherRequest.open("Get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

  var currentCondition = weatherData.weather[0].main;
  var highTemp = weatherData.main.temp_max;
  var humidity = weatherData.main.humidity;
  var mainTemp = weatherData.main.temp;
  var windSpeed = weatherData.wind.speed;
  var imageConditions = "https://openweathermap.org/img/w/";

  document.getElementById("current-weather").innerHTML = currentCondition;
  document.getElementById("temp-high").innerHTML = highTemp;
  document.getElementById("humid").innerHTML = humidity;
  document.getElementById("windTemp").innerHTML = mainTemp;
  document.getElementById("windSpeed").innerHTML = windSpeed;
  document.getElementById("windChill").innerHTML = getWindChill();
  document
    .getElementById("conditions-icon")
    .setAttribute(
      "src",
      imageConditions + weatherData.weather[0].icon + ".png"
    );
  document
    .getElementById("conditions-icon")
    .setAttribute("alt", weatherData.weather[0].description);
};

//* Calculate wind chill
function getWindChill() {
  var tempF = parseInt(document.getElementById("windTemp").innerHTML);
  var speed = parseInt(document.getElementById("windSpeed").innerHTML);
  result = windChill(tempF, speed);
  return result;
}

function windChill(tempF, speed) {
  var windChillFactor =
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * tempF * Math.pow(speed, 0.16);
  var soCold = windChillFactor.toFixed(2);
  return soCold;
}

let forecastRequest = new XMLHttpRequest();
let forecastApiURLstring =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e681baa04b7db3d01b4b4bb6cfe8420a";
forecastRequest.open("Get", forecastApiURLstring, true);
forecastRequest.send();
