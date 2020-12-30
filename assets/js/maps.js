/*function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 57.708870,
            lng: 11.974560
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat:57.690663904 , lng:11.987329384 }, 
        { lat: 55.702330524 , lng: 13.20166586},
        { lat:  57.659177 , lng: 11.839656}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}*/
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
    { lat:57.690663904 , lng:11.987329384 }, 
        { lat: 55.702330524 , lng: 13.20166586},
        { lat:  57.659177 , lng: 11.839656},
  
];

