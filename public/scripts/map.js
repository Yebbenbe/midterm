// map logic and pins
// don't need to import anything here, just need to create the map

// Initialize and add the map
async function initMap() {
  // The location of the center of the map
  // these will need to be dynamically generated
  var center = {lat: 45.27, lng: -66.07};
  // The map, centered at the center
  var { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: center,
  zoom: 10,
});
  // The array of pins to add to the map
  // these also will dynamically generated from the database
  var pins = [
    {lat: 45.32, lng: -66.02, title: "Quispamsis"},
    {lat: 45.28, lng: -66.06, title: "Rothesay"},
    {lat: 45.24, lng: -66.08, title: "Saint John"},
    {lat: 45.29, lng: -65.99, title: "Hampton"}
  ];
  // Loop through the pins array and create markers for each pin
  for (var i = 0; i < pins.length; i++) {
    var pin = pins[i];
    var marker = new google.maps.Marker({
      position: {lat: pin.lat, lng: pin.lng},
      map: map,
      title: pin.title
    });
  }
}
initMap();