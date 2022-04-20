const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last Updated: ${document.lastModified}`;

const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();

const profilepic = document.querySelector("#profilepic")
profilepic.addEventListener("click", function() {
    if (profilepic.src.match("images/jonlanenga.jpg")) {
        profilepic.src = "images/jon.jpg"
    } else {
        profilepic.src = "images/jonlanenga.jpg"
    }
})
