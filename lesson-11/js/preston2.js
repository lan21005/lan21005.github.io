var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  var townEvents = request.response;
  townPreston(townEvents);
};

function townPreston(jsonObj) {
  var towns = jsonObj["towns"];
  var i = 0;
  var name = towns[i].name;

  for (i = 0; i < towns.length; i++) {
    var name = towns[i].name;
    if (name == "Preston") {
      var eventsString = towns[i].events.join(", ");
      document.getElementById("townEventsPreston").innerHTML =
        "<h2>upcoming_events</h2> " + eventsString;
    }
  }
}

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
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6";
forecastRequest.open("Get", forecastApiURLstring, true);
forecastRequest.send();

function findDayOfWeek(apiDay) {
  var dayDate = new Date(apiDay);
  var day = dayDate.getDay();
  var dayOfWeek;
  switch (day) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    default:
      break;
  }
  return dayOfWeek;
}

forecastRequest.onload = function () {
  let forecastData = JSON.parse(forecastRequest.responseText);
  console.log(forecastData);

  var imageWeather = "https://openweathermap.org/img/w/";
  var forecastArray = forecastData.list;
  var dayOne, dayTwo, dayThree, dayFour, dayFive;
  var z = 0;

  for (var i = 0; i < forecastArray.length; i++) {
    var x = forecastData.list[i].dt_txt;
    var y = x.includes("18:00:00");
    if (y == true) {
      switch (z) {
        case 0:
          dayOne = forecastData.list[i];
          break;
        case 1:
          dayTwo = forecastData.list[i];
          break;
        case 2:
          dayThree = forecastData.list[i];
          break;
        case 3:
          dayFour = forecastData.list[i];
          break;
        case 4:
          dayFive = forecastData.list[i];
          break;
        default:
          break;
      }
      z++;
    }
  }

  // Day One
  document.getElementById("day-1").innerHTML = findDayOfWeek(dayOne.dt_txt);
  document.getElementById("high-1").innerHTML = dayOne.main.temp_max + "&deg;";
  document.getElementById("img-1").setAttribute("src", imageWeather + dayOne.weather[0].icon + ".png");
  document.getElementById("img-1").setAttribute("alt", dayOne.weather[0].description);
  document.getElementById("condition-1").innerHTML = dayOne.weather[0].main;
  document.getElementById("low-1").innerHTML = dayOne.main.temp_min + "&deg;";

  // Day Two
  document.getElementById("day-2").innerHTML = findDayOfWeek(dayTwo.dt_txt);
  document.getElementById("high-2").innerHTML = dayTwo.main.temp_max + "&deg;";
  document.getElementById("img-2").setAttribute("src", imageWeather + dayTwo.weather[0].icon + ".png");
  document.getElementById("img-2").setAttribute("alt", dayOne.weather[0].description);
  document.getElementById("condition-2").innerHTML = dayTwo.weather[0].main;
  document.getElementById("low-2").innerHTML = dayTwo.main.temp_min + "&deg;";

  // Day Three
  document.getElementById("day-3").innerHTML = findDayOfWeek(dayThree.dt_txt);
  document.getElementById("high-3").innerHTML = dayThree.main.temp_max + "&deg;";
  document.getElementById("img-3").setAttribute("src", imageWeather + dayThree.weather[0].icon + ".png");
  document.getElementById("img-3").setAttribute("alt", dayOne.weather[0].description);
  document.getElementById("condition-3").innerHTML = dayThree.weather[0].main;
  document.getElementById("low-3").innerHTML = dayThree.main.temp_min + "&deg;";

  // Day Four
  document.getElementById("day-4").innerHTML = findDayOfWeek(dayFour.dt_txt);
  document.getElementById("high-4").innerHTML = dayFour.main.temp_max + "&deg;";
  document.getElementById("img-4").setAttribute("src", imageWeather + dayFour.weather[0].icon + ".png");
  document.getElementById("img-4").setAttribute("alt", dayOne.weather[0].description);
  document.getElementById("condition-4").innerHTML = dayFour.weather[0].main;
  document.getElementById("low-4").innerHTML = dayFour.main.temp_min + "&deg;";

  // Day Five
  document.getElementById("day-5").innerHTML = findDayOfWeek(dayFive.dt_txt);
  document.getElementById("high-5").innerHTML = dayFive.main.temp_max + "&deg;";
  document.getElementById("img-5").setAttribute("src", imageWeather + dayFive.weather[0].icon + ".png");
  document.getElementById("img-5").setAttribute("alt", dayOne.weather[0].description);  
  document.getElementById("condition-5").innerHTML = dayFive.weather[0].main;
  document.getElementById("low-5").innerHTML = dayFive.main.temp_min + "&deg;";
};
