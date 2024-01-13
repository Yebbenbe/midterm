/* 
these routes are mounted onto >>> /login <<< 
(see server.js routing) 
*/

const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.cookie("user_id", id)
  res.redirect('/')
})

router.post('/', (req, res) => {
  res.cookie('user_id', req.body.user_id);
  res.redirect('/');
});

// Export the router object
module.exports = router;