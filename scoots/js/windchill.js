/*  {
      "id": 3530103,
      "name": "Cozumel",
      "state": "",
      "country": "MX",
      "coord": {
          "lon": -86.945831,
          "lat": 20.508329
      }
*/
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=e681baa04b7db3d01b4b4bb6cfe8420a&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temp = (document.querySelector("#temp").textContent =
      jsObject.main.temp.toFixed(1));

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const wspeed = jsObject.wind.speed;
    const humid = jsObject.main.humidity;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;
    document.querySelector("#speed").textContent = wspeed;
    document.querySelector("#humid").textContent = humid;
    let wchill = "";

    if (temp <= 50 && wspeed > 3) {
      wchill = windchill(temp, wspeed);
      wchill = `${wchill}&deg;F`;
    } else {
      wchill = "N/A";
    }

    document.querySelector("#wchill").innerHTML = wchill;

    function windchill(temp, wspeed) {
      windchill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(wspeed, 0.16) +
        0.4275 * temp * Math.pow(wspeed, 0.16);
      return windchill.toFixed(1);
    }
  });

// display and label a forecasted temperature that is five days from the current date at noon, label each day with the day of the week
const apiURL2 =
  "https://api.openweathermap.org/data/2.5/forecast?lat=20.508329&lon=-86.945831&appid=e681baa04b7db3d01b4b4bb6cfe8420a&units=imperial";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const forecasttemp = jsObject.list.filter((x) =>
      x.dt_txt.includes("12:00:00")
    );
    console.log(forecasttemp);
    const forecasttemptemp = forecasttemp.map((x) => x.main.temp);
    console.log(forecasttemptemp);
    const forecasttemptempf = forecasttemptemp.map((x) => x.toFixed(1));
    console.log(forecasttemptempf);
    const forecasttemptempfstring = forecasttemptempf.map((x) => x.toString());
    console.log(forecasttemptempfstring);
    const forecasttemptempfstringjoin = forecasttemptempfstring.join(", ");
    console.log(forecasttemptempfstringjoin);
    document.querySelector("#forecasttemp").innerHTML =
      forecasttemptempfstringjoin;
  });
