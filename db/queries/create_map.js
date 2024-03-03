const db = require('../connection');

const createMap = function (map, userId) {
  return db
  .query(`
  INSERT INTO maps (user_id, title, description, image, center_lat, center_long)
  VALUES ($1, $2, $3, $4, $5, $6)
  `, [userId, map['map-title'], map['map-description'], map['map-image'], map['map-latitude'], map['map-longitude']]);
};

module.exports = { createMap };

