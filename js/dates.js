const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last Updated: ${document.lastModified}`;

const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();


//change profile picture on click
function changeImage(element) {
    var right = "images/profile.jpg";
    var left = "images/easter_egg.jpg";
    element.src = element.bln ? right : left;
    element.bln = !element.bln;
}