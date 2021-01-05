function initMap() {
  const map = new google.maps.Map(
    document.getElementById("map"),
    {
      zoom: 3,
      center: { lat: 57.708870, lng: 11.974560 },
    }
  );

  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  // Add a marker clusterer to manage the markers.
  // @ts-ignore MarkerClusterer defined via script
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
    { lat: 57.570999, lng: 11.785640},
    { lat: 57.696990, lng: 11.986500},
    { lat: 57.686820, lng: 11.935010},
    { lat: 57.681620, lng: 11.988610},
    { lat: 57.696990, lng: 11.986500},
    { lat: 57.696990, lng: 11.986500},
    { lat: 57.696990, lng: 11.986500},
    { lat: 57.886520, lng: 11.580500},
    { lat: 57.696930, lng: 11.947250},
    { lat: 57.633260, lng: 11.936000},
    { lat: 58.039180, lng: 12.398090},
    { lat: 57.696990, lng: 11.986500},
    { lat: 57.6664104, lng: 12.096590}, 
    { lat: 57.696990, lng: 11.986500},
    { lat: 57.697479, lng: 11.989051},
];
/*
let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
const countryRestrict = { location: "1" };
const MARKER_PATH =
  "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");
const locations = {
  1: {
    center: { lat: 57.570999, lng: 11.785640 },
    zoom: 4,
  },
  2: {
    center: { lat: 57.696990, lng: 11.986500 },
    zoom: 3,
  },
  
  
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: locations["1"].zoom,
    center: locations["1"].center,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    streetViewControl: false,
  });
  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById("info-content"),
  });
document
    .getElementById("location")
    .addEventListener("change", setAutocompleteLocation);
}
function setAutocompleteLocation() {
  const location = document.getElementById("location").value;

  if (location == "0") {
    autocomplete.setComponentRestrictions({ location: [] });
    map.setCenter({ lat: 57.708870, lng: 11.974560 });
    map.setZoom(2);
  } else {
    autocomplete.setComponentRestrictions({ location: location });
    map.setCenter(locations[location].center);
    map.setZoom(locations[location].zoom);
  }
  clearResults();
  clearMarkers();
}

function dropMarker(i) {
  return function () {
    markers[i].setMap(map);
  };
}
*/
