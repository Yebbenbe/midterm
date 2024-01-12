
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

// Export the router object
module.exports = router;