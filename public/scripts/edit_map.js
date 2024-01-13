function showMap() {
  // Event listener for the edit icon (fa-pen)
  $('#my-maps-container').on('click', '.fa-pen', function () {
    const mapId = $(this).closest('.card').data('map-id');
    window.location.href = '/map/edit/' + mapId;
  });
}

$(document).ready(function () {
  showMap();
});