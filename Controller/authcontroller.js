// controllers/registrationController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Registration = require('../model/Registration');

// Create new user (Register)
const createUser = async (req, res) => {
  let { firstName, lastName, email, phoneNumber, password, instituteName, stream, degree } = req.body;

  // Convert fields to uppercase as required
  firstName = firstName.toUpperCase();
  lastName = lastName.toUpperCase();
  instituteName = instituteName.toUpperCase();
  stream = stream.toUpperCase();
  degree = degree.toUpperCase();

  // Convert email to lowercase
  email = email.toLowerCase();

  try {
    // Check if user already exists
    const userExists = await Registration.findOne({ $or: [{ email }, { phoneNumber }] });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create the new user with modified data
    const newUser = new Registration({ firstName, lastName, email, phoneNumber, password, instituteName, stream, degree });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Add or update result for a user by email
const addOrUpdateResult = async (req, res) => {
  const { email } = req.params;
  const {
    subModuleName,
    score,
    maxScore,
    percentage,
    questionsAttempted,
    totalQuestions,
    timeTaken,
    totalTime,
    startTime,
    endTime,
  } = req.body;

  try {
    // Find the user by email
    const user = await Registration.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add or update the result in the user's results array
    const resultIndex = user.results.findIndex(result => result.subModuleName === subModuleName);
    if (resultIndex === -1) {
      // If result for this submodule doesn't exist, add it
      user.results.push({
        subModuleName,
        score,
        maxScore,
        percentage,
        questionsAttempted,
        totalQuestions,
        timeTaken,
        totalTime,
        startTime,
        endTime,
      });
    } else {
      // If result for this submodule exists, update it
      user.results[resultIndex] = {
        subModuleName,
        score,
        maxScore,
        percentage,
        questionsAttempted,
        totalQuestions,
        timeTaken,
        totalTime,
        startTime,
        endTime,
      };
    }

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'Result added/updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error adding/updating result', error: error.message });
  }
};

// Get a user's result by email and submodule name
const getResultByEmailAndSubmodule = async (req, res) => {
  const { email, subModuleName } = req.params;

  try {
    // Find the user by email
    const user = await Registration.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the result by submodule name
    const result = user.results.find(result => result.subModuleName === subModuleName);
    if (!result) {
      return res.status(404).json({ message: `Result for submodule ${subModuleName} not found` });
    }

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching result', error: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await Registration.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

// Get a single user by email
const getUserByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await Registration.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

// Update a user by email
const updateUserByEmail = async (req, res) => {
  const { email } = req.params;
  const updatedData = req.body;

  try {
    const updatedUser = await Registration.findOneAndUpdate({ email }, updatedData, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

// Delete a user by email
const deleteUserByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const deletedUser = await Registration.findOneAndDelete({ email });
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Registration.findOne({ $or: [{ email }, { phoneNumber: email }] });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'mySecretKey1234!@#', { expiresIn: '1h' });
    const { password: _, ...userData } = user.toObject(); // Hide password from response

    res.status(200).json({ message: 'Login successful', token, data: userData });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail,
  loginUser,
  addOrUpdateResult,
  getResultByEmailAndSubmodule,
};
