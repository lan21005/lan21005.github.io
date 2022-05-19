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
