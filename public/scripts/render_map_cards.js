// Script to render All map cards + Render map cards owned by logged in user here: 

$(document).ready(function () {
  
  // Render all maps onto homepage index.ejs 
  $.ajax({
    url: '/api/maps/all',
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log('Received maps data:', response);
      const maps = response.maps;

      const $mapsContainer = $('#maps-container');

      maps.forEach(function (map) {
        const $mapCard = $(`
          <div class="card mb-3">
            <img class="card-img-top" src="${map.image}" alt="Map Image">
            <div class="card-body">
              <h5 class="card-title">${map.title}</h5>
              <p class="card-description">${map.description}</p>
              <p class="card-buttons">
                <i class="fa-solid fa-eye" data-map-id="${map.map_id}"></i>
                <i class="fa-solid fa-heart"></i>
                <small>By ${map.username}</small>
              </p>
            </div>
          </div>
        `);
        $mapsContainer.append($mapCard);
      });
    },
    error: function (error) {
      console.error('Error fetching map data:', error);
    },
  });


  // Render maps belonging to logged in user onto mymaps.ejs
  $.ajax({
    url: '/api/maps/' + Cookies.get('user_id'),
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log('Received maps data:', response);
      const mymaps = response.mymaps;

      const $mymapsContainer = $('#my-maps-container');

      mymaps.forEach(function (mymap) {
        const $mymapCard = $(`
          <div class="card mb-3">
            <img class="card-img-top" src="${mymap.image}" alt="Example Map Image">
            <div class="card-body">
              <h5 class="card-title">${mymap.title}</h5>
              <p class="card-description">${mymap.description}</p>
              <p class="card-buttons">
                <i class="fa-solid fa-pen" data-map-id="${mymap.map_id}"></i>
                <i class="fa-solid fa-trash"></i>
              </p>
            </div>
          </div>
        `); 
        $mymapsContainer.append($mymapCard);
      });
    },
    error: function (error) {
      console.error('Error fetching map data:', error);
    },
  });

});