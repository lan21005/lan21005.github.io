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
townName.textContent = towns[4].name;
preston.appendChild(townName);

var townMotto = document.createElement('h3');
townMotto.textContent = '"' + towns[4].motto + '"';
preston.appendChild(townMotto);

var townFound = document.createElement('h4');
townFound.textContent = 'Founded: ' + towns[4].yearFounded;
preston.appendChild(townFound);

var townPop = document.createElement('h4');
townPop.textContent = 'Population: ' + towns[4].currentPopulation;
preston.appendChild(townPop);

var townRain = document.createElement('h4');
townRain.textContent = 'Average Precipitation: ' + towns[4].averageRainfall + '"';
preston.appendChild(townRain);
}


function townSodaSprings(jsonObj) {
var towns = jsonObj['towns']

var townName = document.createElement('h2');
townName.textContent = towns[5].name;
sodasprings.appendChild(townName);

var townMotto = document.createElement('h3');
townMotto.textContent = '"' + towns[5].motto + '"';
sodasprings.appendChild(townMotto);

var townFound = document.createElement('h4');
townFound.textContent = 'Founded: ' + towns[5].yearFounded;
sodasprings.appendChild(townFound);

var townPop = document.createElement('h4');
townPop.textContent = 'Population: ' + towns[5].currentPopulation;
sodasprings.appendChild(townPop);

var townRain = document.createElement('h4');
townRain.textContent = 'Average Precipitation: ' + towns[5].averageRainfall + '"';
sodasprings.appendChild(townRain);
}


function townFishHaven(jsonObj) {
var towns = jsonObj['towns']

var townName = document.createElement('h2');
townName.textContent = towns[1].name;
fishhaven.appendChild(townName);

var townMotto = document.createElement('h3');
townMotto.textContent = '"' + towns[1].motto + '"';
fishhaven.appendChild(townMotto);

var townFound = document.createElement('h4');
townFound.textContent = 'Founded: ' + towns[1].yearFounded;
fishhaven.appendChild(townFound);

var townPop = document.createElement('h4');
townPop.textContent = 'Population: ' + towns[1].currentPopulation;
fishhaven.appendChild(townPop);

var townRain = document.createElement('h4');
townRain.textContent = 'Average Precipitation: ' + towns[1].averageRainfall + '"';
fishhaven.appendChild(townRain);
}