// Import required node modules
const express = require('express');
const router = express.Router();
const path = require('path');

// Imports controller
const ageController = require(path.join(__dirname, '../controller/age.controller'));

// @route   GET /api/age/verify/:id
// @desc    return if the person is 18+
// @access  public
router.get('/verify/:age', ageController.verify);

// Exports router
module.exports = router;
