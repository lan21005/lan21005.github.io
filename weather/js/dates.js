// Dates //
const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last Updated: ${document.lastModified}`;

const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();

// Hamburger Button //
/*Button css*/
function toggleMenu() {
    console.log("It worked!");
    document.querySelector("#primarynav").classList.toggle("open");
    document.querySelector("#hamburgerbtn").classList.toggle("open");
  }
  
  const x = document.querySelector("#hamburgerbtn");
  x.onclick = toggleMenu;