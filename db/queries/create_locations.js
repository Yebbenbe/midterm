const db = require('../connection');

const createLocation = function (location) {
  return db
  .query(`
  INSERT INTO locations (map_id, title, description, location_lat, location_long, image_url)
  VALUES ($1, $2, $3, $4, $5, $6)
  `, [1, location['location-title'], location['location-description'], location['location-latitude'], location['map-longitude'], location['location-image']]);
    // hardcode map_id as 1 for now
};

module.exports = { createLocation };