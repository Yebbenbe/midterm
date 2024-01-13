const db = require('../connection');

const getAllMaps = function () {
  return db
    .query(`
      SELECT maps.id AS map_id,
      maps.user_id, maps.title,
      maps.description,
      maps.image,
      users.name AS username
      FROM maps JOIN users ON maps.user_id = users.id
    `)
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error fetching map data:', error);
      throw new Error('Error fetching map data.');
    });
};

const createMap = function (map) {
  return db.query(`
  INSERT INTO maps (user_id, title, description, image, latitude, longitude)
  VALUES ($1, $2, $3, $4, $5, $6)
  `, [1, map['map-title'], map['map-description'], map['map-image'], map['map-latitude'], map['map-longitude']]);
};

module.exports = { getAllMaps, createMap };
