const mapId = 1; //hard-coded

$('#my-maps-container').on('click', '.fa-pen', function () {
  window.location.href = '/map/edit/'+mapId;
});

function getLocations() {
    // Fetch locations for the selected map using the API
    $.ajax({
      url: '/api/maps/locations/'+mapId,
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

function renderLocationMarkers(locations) {
  locations.forEach(function (location) {
    const marker = new google.maps.Marker({
      position: { lat: location.location_lat, lng: location.location_long },
      map: map
    });
    const infoWindow = new google.maps.InfoWindow({
      content: `
      <h6>${location.title}</h6><p>${location.description}</p>
      <div><img src="${location.image_url}" width="100" height="100"></div>
      `,
    });
    marker.addListener('click', function () {
      infoWindow.open(map, marker);
    });
  });
}

$(document).ready(function () {
  getLocations();
}); 
