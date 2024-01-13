/*
these routes are mounted onto >>> '/map' <<<
(see server.js routing)
*/

// will contain the following routes: /view /create /edit /delete

const express = require('express');
const router  = express.Router();
const helpers = require('../db/queries/all_maps');

router.get('/create', (req, res) => {
  const userId = req.cookies.user_id;
  res.render('createmap.ejs', { user_id: userId });
});

// here, id must feed to initialize_maps.js
router.get('/view/:id', (req, res) => {
  const userId = req.cookies.user_id;
  res.render('viewmap.ejs', { user_id: userId });
});

router.get('/edit/:id', (req, res) => {
  const userId = req.cookies.user_id;
  res.render('editmap.ejs', { user_id: userId });
});

router.post('/create', (req, res) => {
  helpers.createMap(req.body).then(
    function() {
      res.redirect('/mymaps');
    }
  );
});


module.exports = router;
