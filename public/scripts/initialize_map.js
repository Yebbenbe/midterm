// Initialize the map and add pins to it
const path = window.location.pathname; // /map/view/id ?
const id = path.split('/')[3]; // id ?
console.log("test:", id, path);
// Initialize and add the map
async function initMap(id) {
  console.log("step 1");
  try {
    // Fetch map details from the API endpoint
    const response = await fetch(`/api/maps/`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch map data. Status: ${response.status}`);
    }

    const mapData = await response.json();

    console.log("mapData:", mapData);
    console.log(`Selected Map Data for ID ${id}:`, mapData.maps.find(map => map.map_id === parseInt(id, 10)));

    // Ensure that mapData is not empty
    if (!mapData || !mapData.maps || mapData.maps.length === 0) {
      console.error('Map data not found.');
      return;
    }

    // Extract center and zoom details for the specified map
    const selectedMap = mapData.maps.find(map => map.map_id === parseInt(id, 10));

    // Check if the selected map is found
    if (!selectedMap) {
      console.error('Selected map not found.');
      return;
    }
    console.log('Center Lat:', selectedMap.center_lat, 'Center Long:', selectedMap.center_long);

    const center = { lat: parseFloat(selectedMap.center_lat), lng: parseFloat(selectedMap.center_long) };
    const zoom = 10;

    // The map, centered at the center
    const { Map } = await google.maps.importLibrary('maps');
    const map = new Map(document.getElementById('map'), {
      center: center,
      zoom: zoom,
    });

    // Loop through the pins array and create markers for each pin
    // Note: You may need to adjust the marker creation based on your actual data structure
    // This example assumes latitude and longitude properties in the map object
    const marker = new google.maps.Marker({
      position: { lat: selectedMap.center_lat, lng: selectedMap.center_lng },
      map: map,
      title: selectedMap.title,
    });

  } catch (error) {
    console.error('Error initializing map:', error);
  }
}

// Call the initMap function when the page is loaded
document.addEventListener('DOMContentLoaded', () => initMap(id));