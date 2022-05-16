const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
 
  let birth = document.createElement("p");

  h2.textContent = `${prophet.name} ${prophet.lastname} `;
  portrait.setAttribute("src", prophet.imageurl);

  if (prophet.order == 1) {
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President`
    );
  } else if (prophet.order == 2) {
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President`
    );
  } else if (prophet.order == 3) {
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President`
    );
  } else {
    portrait.setAttribute(
      "alt",
      `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`
    );
  }
  portrait.setAttribute("loading", "lazy");

  birth.innerHTML = `<strong>Birth Date:</strong> ${prophet.birthdate}<br> <strong>Birth Place:</strong> ${prophet.birthplace}`;

  card.appendChild(h2);

  card.appendChild(birth);
  card.appendChild(portrait);

  cards.appendChild(card);
}