/* 
these routes are mounted onto >>> '/api/maps' <<< 
(see server.js routing) 
*/

const express = require('express');
const router  = express.Router();
const mapQueries = require('../db/queries/get_all_maps');

router.get('/', (req, res) => {
  mapQueries.getAllMaps()
    .then(maps => {
      res.json({ maps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
