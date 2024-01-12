/* 
these routes are mounted onto >>> /map <<< 
(see server.js routing) 
*/

// will deal with the following routes - map/view/:id, map/create/:id , map/edit/:id , map/delete/:id 

const express = require('express');
const router  = express.Router();

router.get('/view/id', (req, res) => {
  res.render('mapview.ejs');
}); 

module.exports = router;
