// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');
const router = require('express').Router();

var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

// @desc -  individual signup
// @route - api/individual/signup
// @access - public
// Db.member.create
// Db.memberinstrument.create
//
//
//
// @desc -  individual login
// @route - api/individual/login
// @access - public
// Db.member.create
// Db.memberinstrument.create
//
//
//
// @desc -  profile/ edit profile page
// @route - api/individual/profile
// @access - private
// Db.lfg.findAll - where: lfg.memberId === member.id
//
//
//
// @desc -  individual update
// @route - api/individual/update
// @access - private
// Db.lfg.findAll - where: lfg.memberId === member.id
// Db.member.update - {profilePicture, memberName, location}
// Db.memberinstrument.update - {instrument}

module.exports = router;
