// Dates //
const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last Updated: ${document.lastModified}`;

const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();

const current_date = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const day = current_date.getDate();
const month_num = current_date.getMonth();
const day_num = current_date.getDay();
const day_name = weekday[day_num];
const month_name = month[month_num];
const date = document.querySelector("#current_date");
current_date.innerHTML = `${day_name}, ${month_name} ${day}`;


// Hamburger Button //
/*Button css*/
function toggleMenu() {
    console.log("It worked!");
    document.querySelector("#primarynav").classList.toggle("open");
    document.querySelector("#hamburgerbtn").classList.toggle("open");
  }
  
  const x = document.querySelector("#hamburgerbtn");
  x.onclick = toggleMenu;