// Client facing scripts here

$(document).ready(function () {
  // Fetch map data using AJAX
  $.ajax({
    url: '/api/maps',
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log('Received maps data:', response);
      const maps = response.maps;

      // Reference the map container
      const $mapsContainer = $('#maps-container');

      // Render each map card
      maps.forEach(function (map) {
        const $mapCard = $(`
          <div class="card mb-3">
            <img class="card-img-top" src="${map.image}" alt="Map Image">
            <div class="card-body">
              <h5 class="card-title">${map.title}</h5>
              <p class="card-description">${map.description}</p>
              <p class="card-buttons">
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-heart"></i>
                <small>By ${map.username}</small>
              </p>
            </div>
          </div>
        `); // <-- Missing closing parenthesis

        // Append the map card to the maps container
        $mapsContainer.append($mapCard);
      });
    },
    error: function (error) {
      console.error('Error fetching map data:', error);
    },
  });
});