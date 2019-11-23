// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');

module.exports = function(app) {
    // Individual - create listing
    // @desc -   Create LFG listing
    // @route - api/lfg/create
    // @access - private
    // Db.lfg.create
    //
    //
    //
    //  View listings page
    // @desc -  View LFG
    // @route - api/lfg/view
    // @access - private
    // Db.lfg.findOne where id  = req.body.id
    //
    //
    //
    // @desc -  View LFG
    // @route - api/lfg/view
    // @access - private
    // Db.lfg.findOne where id  = req.body.id (left join member  - keys: lfg.MemberId = member.id
    // profile pic, member name, (from join)
    // instrument, location, distance, ad, youtubeLink, (from lfg)
};
