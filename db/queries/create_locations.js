const db = require('../connection');

const createLocation = function (mapId, title, description, latitude, longitude, image_url) {
  const query = `
     INSERT INTO locations (map_id, title, description, location_lat, location_long, image_url)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *;
  `;
  const values = [mapId, title, description, latitude, longitude, image_url];

  return db.query(query, values)
     .then(result => result.rows[0])
     .catch(err => { throw err; });
};

module.exports = { createLocation };