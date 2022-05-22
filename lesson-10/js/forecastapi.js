//* Get JSON data from OpenWeatherMap

let forecastRequest = new XMLHttpRequest();
let forecastApiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6';
forecastRequest.open('Get', forecastApiURLstring, true);
forecastRequest.send();

//* Function to display five-day forecast days as string rather than integer

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

//* Get correct days for five day forecast, compare dt_txt for time stamp 18:00:00 and loop

forecastRequest.onload = function () {
  let forecastData = JSON.parse(forecastRequest.responseText);
  console.log(forecastData);

  var imageWeather = "https://openweathermap.org/img/w/";
  var forecastArray = forecastData.list;
  var dayOne, dayTwo, dayThree, dayFour, dayFive;
  var z = 0;

  for (var i = 0; i < forecastArray.length; i++) {
    var x = forecastData.list[i].dt_txt;
    var y = x.includes('18:00:00');
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

  //* Write data into table by element IDs.

  document.getElementById("day-1").innerHTML = findDayOfWeek(dayOne.dt_txt);
  document.getElementById("day-2").innerHTML = findDayOfWeek(dayTwo.dt_txt);
  document.getElementById("day-3").innerHTML = findDayOfWeek(dayThree.dt_txt);
  document.getElementById("day-4").innerHTML = findDayOfWeek(dayFour.dt_txt);
  document.getElementById("day-5").innerHTML = findDayOfWeek(dayFive.dt_txt);

  document.getElementById("high-1").innerHTML = dayOne.main.temp_max + "&deg;";
  document.getElementById("high-2").innerHTML = dayTwo.main.temp_max + "&deg;";
  document.getElementById("high-3").innerHTML = dayThree.main.temp_max + "&deg;";
  document.getElementById("high-4").innerHTML = dayFour.main.temp_max + "&deg;";
  document.getElementById("high-5").innerHTML = dayFive.main.temp_max + "&deg;";

  document.getElementById("img-1").setAttribute("src", imageWeather + dayOne.weather[0].icon + ".png");
  document.getElementById("img-2").setAttribute("src", imageWeather + dayTwo.weather[0].icon + ".png");
  document.getElementById("img-3").setAttribute("src", imageWeather + dayThree.weather[0].icon + ".png");
  document.getElementById("img-4").setAttribute("src", imageWeather + dayFour.weather[0].icon + ".png");
  document.getElementById("img-5").setAttribute("src", imageWeather + dayFive.weather[0].icon + ".png");

  document.getElementById("img-1").setAttribute("alt", dayOne.weather[0].description);
  document.getElementById("img-2").setAttribute("alt", dayOne.weather[0].description);
  document.getElementById("img-3").setAttribute("alt", dayOne.weather[0].description);
  document.getElementById("img-4").setAttribute("alt", dayOne.weather[0].description);
  document.getElementById("img-5").setAttribute("alt", dayOne.weather[0].description);

  document.getElementById("condition-1").innerHTML = dayOne.weather[0].main;
  document.getElementById("condition-2").innerHTML = dayTwo.weather[0].main;
  document.getElementById("condition-3").innerHTML = dayThree.weather[0].main;
  document.getElementById("condition-4").innerHTML = dayFour.weather[0].main;
  document.getElementById("condition-5").innerHTML = dayFive.weather[0].main;

  document.getElementById("low-1").innerHTML = dayOne.main.temp_min + "&deg;";
  document.getElementById("low-2").innerHTML = dayTwo.main.temp_min + "&deg;";
  document.getElementById("low-3").innerHTML = dayThree.main.temp_min + "&deg;";
  document.getElementById("low-4").innerHTML = dayFour.main.temp_min + "&deg;";
  document.getElementById("low-5").innerHTML = dayFive.main.temp_min + "&deg;";
}