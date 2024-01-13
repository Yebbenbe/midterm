const db = require('../connection');

const getLocationsByMapId = function (mapId) {
  return db
    .query(`
      SELECT * FROM locations
      WHERE map_id = $1
    `, [mapId])
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error fetching locations by map_id:', error);
      throw new Error('Error fetching locations by map_id.');
    });
};

module.exports = { getLocationsByMapId };