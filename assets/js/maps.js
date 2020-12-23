function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 58.298584,
            lng: 12.961619
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 55.60587, lng: 13.00073 },
        { lat: 57.70716, lng: 11.96679},
        { lat: 59.33258, lng: 18.0649}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

}
