// routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const registrationController = require('../Controller/authcontroller');

// Route to register user
router.post('/register', registrationController.createUser);

// Route to add or update result for a user by email
router.post('/result/:email/:subModuleName', registrationController.addOrUpdateResult);

// Route to get result by email and submodule name
router.get('/results/:email/:subModuleName', registrationController.getResultByEmailAndSubmodule);

// Route to get all users
router.get('/users', registrationController.getUsers);

// Route to get a single user by email
router.get('/users/:email', registrationController.getUserByEmail);

// Route to update user by email
router.put('/users/:email', registrationController.updateUserByEmail);

// Route to delete user by email
router.delete('/users/:email', registrationController.deleteUserByEmail);

// Route for user login
router.post('/login', registrationController.loginUser);

module.exports = router;
