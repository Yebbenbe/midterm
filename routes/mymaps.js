/* 
these routes are mounted onto >>> /mymaps <<< 
(see server.js routing) 
*/

// will deal with the following routes - /mymaps

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('mymaps.ejs');
}); 

module.exports = router;