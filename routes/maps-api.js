/* 
these routes are mounted onto >>> '/api/maps' <<< 
(see server.js routing) 
*/

const express = require('express');
const router  = express.Router();
const mapQuery1 = require('../db/queries/get_all_maps');
const mapQuery2 = require('../db/queries/get_map_by_id');


router.get('/all', (req, res) => {
  mapQuery1.getAllMaps()
    .then(maps => {
      res.json({ maps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  const userId = req.cookies.user_id; // Retrieve user ID from the cookie
  mapQuery2.getMapByID(userId)
    .then(mymaps => {
      res.json({ mymaps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
