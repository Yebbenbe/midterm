const db = require('../connection');

const getMapByID = function (userId) {
  return db
    .query(`
    SELECT maps.id AS map_id, 
    maps.user_id, maps.title,
    maps.description,
    maps.image,

    users.name AS username
    FROM maps JOIN users ON maps.user_id = users.id
    WHERE users.id = $1
    `, [userId])
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error fetching map data:', error);
      throw new Error('Error fetching map data.');
    });
};

module.exports = {getMapByID};