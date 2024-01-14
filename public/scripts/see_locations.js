// function to extract the map id from the url
function getMapIdFromUrl() {
  const pathSegments = window.location.pathname.split('/');
  const mapTypeIndex = pathSegments.indexOf('view') + 1 || pathSegments.indexOf('edit') + 1;
  return pathSegments[mapTypeIndex];
}

// Get the mapId when the script is loaded
const mapId = getMapIdFromUrl(); 

// function to fetch json locations object from API for selected map (signified by 'mapId')
function getLocations() {
  $.ajax({
      url: '/api/maps/locations/' + mapId,
      method: 'GET',
      dataType: 'json',
      success: function (response) {
          console.log('Received locations data:', response);
          const locations = response.locations;
          renderLocationMarkers(locations);
      },
      error: function (error) {
          console.error('Error fetching location data:', error);
      },
  });
}

// CALLBACK FUNCTION (it is called inside of getLocations): renders the markers with info window box - containing location title, description, image
function renderLocationMarkers(locations) {
  locations.forEach(function (location) {
      const marker = new google.maps.Marker({
          position: { lat: location.location_lat, lng: location.location_long },
          map: map
      });
      const infoWindow = new google.maps.InfoWindow({
          content: `
          <center><h6>${location.title}</h6><p>${location.description}</p>
          <div><img src="${location.image_url}" width="100" height="100"></div></center>
          `,
      });
      marker.addListener('click', function () {
          infoWindow.open(map, marker);
      });
  });
}


// finally ready document and execute getLocations function when the 'see-location-button' is clicked on

$(document).ready(function () {
  $('#see-location-button').on('click', function () {
      getLocations();
  });
});