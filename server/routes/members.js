// Requiring our models and passport as we've configured it
const db = require('../models');
const passport = require('../config/passport');
const router = require('express').Router();

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

// member routes

module.exports = router;
