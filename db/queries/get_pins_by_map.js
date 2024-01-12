const db = require('../connection');

const getAllLocations = function () {
  return db
    .query(`
    SELECT id AS location_id, 
    map_id,
    title,
    description,
    latitude,
    longitude,
    image_url
    FROM locations
    `)
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error fetching map data:', error);
      throw new Error('Error fetching map data.');
    });
};

module.exports = { getAllLocations };