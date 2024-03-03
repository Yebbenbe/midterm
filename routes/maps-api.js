/*
these routes are mounted onto >>> '/api/maps' <<<
(see server.js routing)
*/

const express = require('express');
const router  = express.Router();
const mapQuery1 = require('../db/queries/get_all_maps');
const mapQuery2 = require('../db/queries/get_maps_by_userid');
const mapQuery3 = require('../db/queries/get_locations_by_mapid');
const { createLocation } = require('../db/queries/create_locations');


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


router.post('/locations/1', (req, res) => {
  const title = req.body['location-title'];
  const description = req.body['location-description'];
  const latitude = req.body['location-latitude'];
  const longitude = req.body['location-longitude'];
  const image_url = req.body['location-image'];

  createLocation(title, description, latitude, longitude, image_url)
    .then(newLocation => {
      res.status(201).json({ location: newLocation });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
