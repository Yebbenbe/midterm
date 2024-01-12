/* 
these routes are mounted onto >>> '/map' <<< 
(see server.js routing) 
*/

// will contain the following routes: /view /create /edit /delete

const express = require('express');
const router  = express.Router();

router.get('/view/id', (req, res) => {
  res.render('viewmap.ejs');
});

module.exports = router;
