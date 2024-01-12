/*
these routes are mounted onto >>> '/map' <<<
(see server.js routing)
*/

// will contain the following routes: /view /create /edit /delete

const express = require('express');
const router  = express.Router();
const helpers = require('../db/queries/all_maps');

router.get('/create', (req, res) => {
  res.render('createmap.ejs');
});

router.get('/view/id', (req, res) => {
  res.render('viewmap.ejs');
});

router.get('/edit/id', (req, res) => {
  res.render('editmap.ejs');
});

router.post('/create', (req, res) => {
  helpers.createMap(req.body).then(
    function() {
      res.redirect('/mymaps');
    }
  );
});


module.exports = router;
