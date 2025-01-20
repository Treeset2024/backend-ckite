const express = require('express');
const profileController = require('../Controller/profileController');
const { protect } = require('../middleware/authenticateJWT'); // Assuming you're using JWT authentication middleware

const router = express.Router();

// GET route to fetch the user's profile
router.get('/profile', protect, profileController.getUserProfile);

module.exports = router;
