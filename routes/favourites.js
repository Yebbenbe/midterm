/* 
these routes are mounted onto >>> /favourites <<< 
(see server.js routing) 
*/

// will deal with the following routes - /favourites

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('favourites.ejs');
}); 

module.exports = router;