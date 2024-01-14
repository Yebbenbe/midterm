/*
these routes are mounted onto >>> '/map' <<<
(see server.js routing)
*/

// will contain the following routes: /view /create /edit /delete

const express = require('express');
const router  = express.Router();
const mapQuery = require('../db/queries/create_map');
const mapQuery2 = require('../db/queries/get_map_by_mapid.js')
const mapQuery3 = require('../db/queries/create_locations')

router.get('/create', (req, res) => {
  const userId = req.cookies.user_id;
  res.render('createmap.ejs', { user_id: userId });
});

router.get('/view/:id', (req, res) => {
  const userId = req.cookies.user_id;
  res.render('viewmap.ejs', { user_id: userId });
});

router.get('/edit/:id', (req, res) => {
  const userId = req.cookies.user_id;
  const mapId = req.params.id;
  // Fetch map data by ID, including center_lat and center_long
  mapQuery2.getMapById(mapId).then((map) => {
    res.render('editmap.ejs', {
      user_id: userId,
      map_id: map.id,
      map_title: map.title,
      center_lat: map.center_lat,
      center_long: map.center_long,
    });
  });
});

router.post('/edit/:id', (req, res) => {
  // Fetch map data by ID, including center_lat and center_long
  mapQuery3.createLocation(req.body).then(
    function() {
      res.redirect('/mymaps');
    })
});

router.post('/create', (req, res) => {
  mapQuery.createMap(req.body).then(
    function() {
      res.redirect('/mymaps');
    }
  );
});


module.exports = router;
