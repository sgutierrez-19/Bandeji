// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');

module.exports = function(app) {
    // @desc -  band signup - creates band name and location
    // @route - api/band/signup
    // @access - public
    // db.band.create
    //
    //
    //
    // @desc -  user member creation
    // @route - api/band/usermember
    // @access - private
    // Db.member.create
    // Db.memberinstrument.create
    // db.bandmember.create
    //
    //
    //
    // @desc -  additional band member creation - does not have userID
    // @route - api/band/bandmember
    // @access - private
    // Db.member.create;
    // Db.memberinstrument.create;
    // db.bandmember.create;
    //
    //
    //
    // @desc -  additional band member creation - does not have userID
    // @route - api/band/bandmember
    // @access - private
    // Db.member.create
    // Db.memberinstrument.create
    // db.bandmember.create
};
