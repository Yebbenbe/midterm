// Client facing scripts here

$(document).ready(function () {
  // Fetch map data using AJAX
  $.ajax({
    url: '/api/maps/all',
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
        `);

        // Append the map card to the maps container
        $mapsContainer.append($mapCard);
      });
    },
    error: function (error) {
      console.error('Error fetching map data:', error);
    },
  });

  $.ajax({
    url: '/api/maps/' + Cookies.get('user_id'),
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log('Received maps data:', response);
      const mymaps = response.mymaps;

      // Reference the map container
      const $mymapsContainer = $('#my-maps-container');

      // Render each map card
      mymaps.forEach(function (mymap) {
        const $mymapCard = $(`
          <div class="card mb-3">
            <img class="card-img-top" src="${mymap.image}" alt="Example Map Image">
            <div class="card-body">
              <h5 class="card-title">${mymap.title}</h5>
              <p class="card-description">${mymap.description}</p>
              <p class="card-buttons">
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
              </p>
            </div>
          </div>
        `); 
        // Append the map card to the maps container
        $mymapsContainer.append($mymapCard);
      });
    },
    error: function (error) {
      console.error('Error fetching map data:', error);
    },
  });
});