// Function to extract the map id from the url
function getMapIdFromUrl() {
  const pathSegments = window.location.pathname.split('/');
  const mapTypeIndex = pathSegments.indexOf('view') + 1 || pathSegments.indexOf('edit') + 1;
  return pathSegments[mapTypeIndex];
}

// Get the mapId when the script is loaded
const idOfMap = getMapIdFromUrl(); 

// Script to render a new location pin: 
$(document).ready(function() {
  $('#new-location-form').on('submit', function(event) {
    event.preventDefault(); 

    const formData = $(this).serialize();

    // Send AJAX request
    $.ajax({
      type: 'POST',
      url: '/api/maps/locations/' + idOfMap,
      data: formData,
      success: function(response) {
        $('html, body').animate({ scrollTop: 0 }, 'slow'); // scroll to top of page when form is submitted
        console.log('Location added successfully:', response);
      },
      error: function(error) {
        console.error('Error adding location:', error);
      }
    });

  });
});
