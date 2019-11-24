// Requiring our models and passport as we've configured it
var db = require('../models');
// var passport = require('../config/passport');
const router = require('express').Router();

// var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

// Individual - create listing
// @desc -   Create LFG listing
// @route - api/lfg/create
// @access - private
// Db.lfg.create
//isAuthenticatedData, ... to be added after testing
router.post('api/lfg/create', async (req, res) => {
  const { youtubeLink, location, distance, ad, instrument } = req.body;

  try {
    const newListing = {
      youtubeLink,
      location,
      distance,
      ad,
      instrument
    };

    const listing = await db.lfg.create(newListing);

    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//
//  View listings page
// @desc -  View LFG
// @route - api/lfg/view
// @access - private
// Db.lfg.findOne where id  = req.body.id
//isAuthenticatedData, ... to be added after testing
router.get('api/lfg/view', async (req, res) => {
  try {
    const listing = await db.lfg.findOne({
      where: {
        id: req.body.id
      },
      include: [db.Member]
    });

    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//
//
//
// @desc -  View LFG
// @route - api/lfg/view
// @access - private
// Db.lfg.findOne where id  = req.body.id (left join member  - keys: lfg.MemberId = member.id
// profile pic, member name, (from join)
// instrument, location, distance, ad, youtubeLink, (from lfg)

module.exports = router;
