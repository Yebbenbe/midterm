// Import the 'express' module
const express = require('express');

// Create a router object using Express.js
const router = express.Router();

// Define a route for the root URL ('/')
router.post('/', (req, res) => {
  // Extract 'user_id' from the login form input (assuming it's in the request body)
  const userId = req.body.userId;  // Replace 'userId' with the actual name attribute of your form input

  // Set the 'user_id' property in the session
  req.session.user_id = userId;

  // Redirect the user to the '/maps' URL
  res.redirect('/maps');
});

// Export the router object
module.exports = router;