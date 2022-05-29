/* DATES */
const now = new Date();
const year = now.getFullYear();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

// /*Date in header*/
const datefieldUK = document.querySelector("#date");
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//Last date modified code
const lastmodified = document.querySelector("#lastmodified");
const author_name = "Jon Lanenga";
lastmodified.innerHTML = `&copy; ${year} || <b>${author_name} </b> || WDD 230 Project || Last Modification: ${document.lastModified}`;

// Hamburger Button //
/*Button css*/
function toggleMenu() {
  console.log("It worked!");
  document.querySelector("#primarynav").classList.toggle("open");
  document.querySelector("#hamburgerbtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerbtn");
x.onclick = toggleMenu;
