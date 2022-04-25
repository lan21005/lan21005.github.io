const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last Updated: ${document.lastModified}`;

const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();


//change profile picture on click
const profilepic = document.querySelector('#profilepic');
profilepic.addEventListener('click', function() {
    profilepic.src = 'images/Web_Dev.jpg';
} 
, false);
