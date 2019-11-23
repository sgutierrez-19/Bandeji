var db = require('../models');
var passport = require('../config/passport');
const router = require('express').Router();

var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

// group - create listing
// @desc -   Create LFM listing
// @route - api/lfm/create
// @access - private
// Db.lfm.create
//
//
//
// @desc -  View LFM
// @route - api/lfm/view
// @access - private
// Db.lfm.findOne where id  = req.body.id (left join member  - keys: lfm.BandId = band.id
// band pic, band name, (from join)
// instrument, location, distance, ad, youtubeLink, (from lfg)

module.exports = router;
