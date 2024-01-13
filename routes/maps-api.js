/*
these routes are mounted onto >>> '/api/maps' <<<
(see server.js routing)
*/

const express = require('express');
const router  = express.Router();
const mapQuery1 = require('../db/queries/get_all_maps');
const mapQuery2 = require('../db/queries/get_maps_by_userid');
const mapQuery3 = require('../db/queries/get_locations_by_mapid');


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
  mapQuery2.getMapsByUserID(userId)
    .then(mymaps => {
      res.json({ mymaps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/locations/:mapid', (req, res) => {
  const mapId = req.params.mapid; 
  mapQuery3.getLocationsByMapId(mapId)
    .then(locations => {
      res.json({ locations });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


router.post('/locations/:mapid', (req, res) => {
  const mapId = req.params.mapid;
  // Use req.body to get the form data
  const locationData = req.body;

  // Call the createLocation function to add the location to the database
  mapQuery3.createLocation(mapId, locationData)
    .then(() => {
      res.status(201).send('Location added successfully');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
