/* 
these routes are mounted onto >>> /login <<< 
(see server.js routing) 
*/

const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.cookie("user_id", id);
  res.redirect('/');
});

router.post('/', (req, res) => {
  // Ensure req.body.user_id exists or replace it with the correct field from your form
  const userId = req.body.user_id;
  res.cookie('user_id', userId);
  res.redirect('/');
});

module.exports = router;