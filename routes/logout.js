/* 
these routes are mounted onto >>> /logout <<< 
(see server.js routing) 
*/

const express = require('express');
const router  = express.Router();

router.post("/", (req, res) => {
  res.clearCookie('user_id');
  res.redirect("/");
});

module.exports = router;