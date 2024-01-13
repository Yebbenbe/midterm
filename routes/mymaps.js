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
    res.render('mymaps.ejs');
  } else {
    res.status(403).send('<h1>403: Forbidden</h1><h2>Please check if you are logged in.</h2>');
  }
});


module.exports = router;