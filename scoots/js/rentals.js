const requestURL = "https://lan21005.github.io/scoots/data/rentals.json";
// const requestURL = "data.json"
const cards = document.querySelector("div.cards");
const listButton = document.querySelector("#list-btn");
const cardButton = document.querySelector("#card-btn");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const rental_types = jsonObject["rental_types"];
    rental_types.forEach(displayrental_types);
  });

function displayrental_types(rental_types) {
    let card = document.createElement("section");
    card.setAttribute("class", "rentalcard");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    // p.setAttribute("class", "max_persons");
    let p1 = document.createElement("p");
    p1.setAttribute("class", "max_persons");
    let p2 = document.createElement("p");
    p2.setAttribute("class", "reservation_half_day");
    let p3 = document.createElement("p");
    p3.setAttribute("class", "reservation_full_day");
    let p4 = document.createElement("p");
    p4.setAttribute("class", "walk_in_half_day");
    let p5 = document.createElement("p");
    p5.setAttribute("class", "walk_in_full_day");
    let logo = document.createElement("img");
     
    h2.textContent = `${rental_types.type}`;
    p1.innerHTML = `${rental_types.max_persons}`;
    p2.innerHTML = `${rental_types.reservation_half_day}`;
    p3.innerHTML = `${rental_types.reservation_full_day}`;
    p4.innerHTML = `${rental_types.walk_in_half_day}`;
    p5.innerHTML = `${rental_types.walk_in_full_day}`;

    logo.setAttribute("src", rental_types.imageurl);
    logo.setAttribute("alt", `logo of ${rental_types.name}}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("class", "rental_logo");
    logo.setAttribute("width", "250px");
    logo.setAttribute("height", "250px");
    logo.setAttribute("style", "border-style: double; margin-left: auto; margin-right: auto; display: block;");
    
    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(h2);
    // card.appendChild(p);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    
     // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector("div.cards").appendChild(card);
    document.querySelector("div.cards").appendChild(document.createElement("br"));
    document.querySelector("div.cards").appendChild(document.createElement("hr"));
  }
