// Dates //
const lastmod = document.querySelector("#lastmod");
lastmod.textContent = `Last Updated: ${document.lastModified}`;

const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

const d = new Date();
//Display date in long format Weekday, Month Day, Year
const date = document.querySelector("#date");
document.getElementById("current_date").innerHTML = d.toDateString();

// Hamburger Button //
/*Button css*/
function toggleMenu() {
  console.log("It worked!");
  document.querySelector("#primarynav").classList.toggle("open");
  document.querySelector("#hamburgerbtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerbtn");
x.onclick = toggleMenu;

//Friday Banner/
const banner = document.querySelector("#banner");
const banner_day = new Date();
const day = banner_day.getDay();
if (day == 5) {
  banner.innerHTML =
    "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";
} else {
  banner.style.display = "none";
}

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

// Slides //
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//Town Data//
var preston = document.querySelector('.item2');
var sodasprings = document.querySelector('.item3');
var fishhaven = document.querySelector('.item4');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var townData = request.response;
townPreston (townData);
townFishHaven (townData);
townSodaSprings (townData);
}

function townPreston(jsonObj) {
var towns = jsonObj['towns']

var townName = document.createElement('h2');
townName.textContent = towns[6].name;
preston.appendChild(townName);

var townMotto = document.createElement('h6');
townMotto.textContent = '"' + towns[6].motto + '"';
preston.appendChild(townMotto);

var townFound = document.createElement('h6');
townFound.textContent = 'Founded: ' + towns[6].yearFounded;
preston.appendChild(townFound);

var townPop = document.createElement('h6');
townPop.textContent = 'Population: ' + towns[6].currentPopulation;
preston.appendChild(townPop);

var townRain = document.createElement('h6');
townRain.textContent = 'Average Precipitation: ' + towns[6].averageRainfall + '"';
preston.appendChild(townRain);
}


function townSodaSprings(jsonObj) {
var towns = jsonObj['towns']

var townName = document.createElement('h2');
townName.textContent = towns[0].name;
sodasprings.appendChild(townName);

var townMotto = document.createElement('h6');
townMotto.textContent = '"' + towns[0].motto + '"';
sodasprings.appendChild(townMotto);

var townFound = document.createElement('h6');
townFound.textContent = 'Founded: ' + towns[0].yearFounded;
sodasprings.appendChild(townFound);

var townPop = document.createElement('h6');
townPop.textContent = 'Population: ' + towns[0].currentPopulation;
sodasprings.appendChild(townPop);

var townRain = document.createElement('h6');
townRain.textContent = 'Average Precipitation: ' + towns[0].averageRainfall + '"';
sodasprings.appendChild(townRain);
}


function townFishHaven(jsonObj) {
var towns = jsonObj['towns']

var townName = document.createElement('h2');
townName.textContent = towns[2].name;
fishhaven.appendChild(townName);

var townMotto = document.createElement('h6');
townMotto.textContent = '"' + towns[2].motto + '"';
fishhaven.appendChild(townMotto);

var townFound = document.createElement('h6');
townFound.textContent = 'Founded: ' + towns[2].yearFounded;
fishhaven.appendChild(townFound);

var townPop = document.createElement('h6');
townPop.textContent = 'Population: ' + towns[2].currentPopulation;
fishhaven.appendChild(townPop);

var townRain = document.createElement('h6');
townRain.textContent = 'Average Precipitation: ' + towns[2].averageRainfall + '"';
fishhaven.appendChild(townRain);
}