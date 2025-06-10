const express = require('express');
const router = express.Router();
const MainController = require('../controllers/mainController');

// Define the root route
router.get('/', MainController.getHomepage);

module.exports = router;