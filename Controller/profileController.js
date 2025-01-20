const User = require('../models/User'); // Assuming you're using a User model to interact with the database

// Controller to get the user's profile
exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // assuming the user's ID is decoded from the JWT
    const user = await User.findById(userId).select('-password'); // Exclude password from response

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
