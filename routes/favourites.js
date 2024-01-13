/* 
these routes are mounted onto >>> /favourites <<< 
(see server.js routing) 
*/

// will deal with the following routes - /favourites

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  res.render('favourites.ejs', { user_id: userId });
}); 

module.exports = router;