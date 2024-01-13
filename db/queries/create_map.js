const db = require('../connection');

const createMap = function (map) {
  return db
  .query(`
  INSERT INTO maps (user_id, title, description, image, latitude, longitude)
  VALUES ($1, $2, $3, $4, $5, $6)
  `, [1, map['map-title'], map['map-description'], map['map-image'], map['map-latitude'], map['map-longitude']]);
};

module.exports = { createMap };

