/* 
these routes are mounted onto >>> /mymaps <<< 
(see server.js routing) 
*/

// will deal with the following routes - /mymaps

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  if (userId) {
    res.render('mymaps.ejs', { user_id: userId });
  } else {
    res.status(403).send('<h1>403: Forbidden</h1><h2>Please log in first</h2>');
  }
});


module.exports = router;