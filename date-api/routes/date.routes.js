// Import required node modules
const express = require('express');
const router = express.Router();
const path = require('path');

// Imports controller
const dateController = require(path.join(__dirname, '../controller/date.controller'));

// @route   POST /api/date/get
// @desc    return current date
// @access  public
router.get('/get', dateController.get);

// Exports router
module.exports = router;
