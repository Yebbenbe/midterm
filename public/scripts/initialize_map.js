// Initiialize the map and add pins to it

//import these queries
const {getMapByID, getAllLocations} = require('../db/queries');

// iitialize and add the map
async function initMap() {
  try {
    // Fetch map details from the database
    const mapData = await getMapByID(/* MAP ID id on't remember */);

    // Ensure that mapData is not empty
    if (!mapData || mapData.length === 0) {
      console.error('Map data not found.');
      return;
    }

    // Extract center and zoom details from mapData
    const center = { lat: mapData[0].center_lat, lng: mapData[0].center_lng };
    // const zoom = mapData[0].zoom_level;
    const zoom = 10;

    // Fetch pin (location) data from the database
    const pinData = await getAllLocations();

    // Ensure that pinData is not empty
    if (!pinData || pinData.length === 0) {
      console.error('Pin data not found.');
      return;
    }

    // The map, centered at the center
    const { Map } = await google.maps.importLibrary('maps');
    map = new Map(document.getElementById('map'), {
      center: center,
      zoom: zoom,
    });

    // Loop through the pins array and create markers for each pin
    pinData.forEach((pin) => {
      const marker = new google.maps.Marker({
        position: { lat: pin.latitude, lng: pin.longitude },
        map: map,
        title: pin.title,
      });
    });
  } catch (error) {
    console.error('Error initializing map:', error);
  }
}

// Call the initMap function when the page is loaded
document.addEventListener('DOMContentLoaded', initMap);

/*


async function initMap() {
  // The location of the center of the map
  // these will need to be dynamically generated
  // var center = {lat: 45.27, lng: -66.07};
  // The map, centered at the center
  let { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: center,
  zoom: 10,
});
  // The array of pins to add to the map pulled from database
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
initMap(); */ 