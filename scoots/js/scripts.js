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


function adjustRating(quantity) {
  document.getElementById("quantityvalue").innerHTML = quantity;
}

var placeSearch, autocomplete;

// List all address components (corresponds to form field IDs and Google address object)
var componentForm = {
  autocomplete: ['street_number', 'route'],
  inputCity: 'locality',
  inputState: 'administrative_area_level_1',
  inputZip: 'postal_code',
  inputCounty: 'administrative_area_level_2',
  inputCountry: 'country'
};

// Create autocomplete object based on the autocomplete ("street") field
// Location type restricted to geocode
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */ (document.getElementById('autocomplete')),
      {type: ['geocode']});

  // Call fillInAddress when user selects an address from dropdown
  autocomplete.addListener('place_changed', fillInAddress);
}

// Fill fields with values from Google Maps autocomplete object
function fillInAddress() {

  // Get place data from autocomplete object
  var place = autocomplete.getPlace();
  console.log(place);
  
  // Enable each field, then fill them with the corresponding value from the place object
  for (var component in componentForm) {
    document.getElementById(component).disabled = false;
    document.getElementById(component).value = search(componentForm[component], place.address_components);
  }
}