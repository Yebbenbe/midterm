/* 
these routes are mounted onto >>> '/map' <<< 
(see server.js routing) 
*/

// will contain the following routes: /view /create /edit /delete

const express = require('express');
const router  = express.Router();

router.get('/create', (req, res) => {
  res.render('createmap.ejs');
});

// here, id must feed to initialize_maps.js
router.get('/view/:id', (req, res) => {
  res.render('viewmap.ejs');
});

router.get('/edit/:id', (req, res) => {
  res.render('editmap.ejs');
});


module.exports = router;
