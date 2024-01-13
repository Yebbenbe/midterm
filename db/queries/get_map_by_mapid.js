
const db = require('../connection');

const getMapById = function (mapId) {
  return db
    .query(`
      SELECT * FROM maps
      WHERE id = $1
    `, [mapId])
    .then(data => {
      return data.rows[0];
    })
    .catch(error => {
      console.error('Error fetching map data by ID:', error);
      throw new Error('Error fetching map data by ID.');
    });
};

module.exports = { getMapById };