var db = require('../models');
// var passport = require('../config/passport');
const router = require('express').Router();

// var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

// group - create listing
// @desc -   Create LFM listing
// @route - api/lfm/create
// @access - private
// Db.lfm.create
//isAuthenticatedData, ... to be added after testing
router.post('api/lfm/create', async (req, res) => {
  const { youtubeLink, location, ad, instrument } = req.body;

  try {
    const newListing = {
      youtubeLink,
      location,
      ad,
      instrument
    };

    const listing = await db.lfm.create(newListing);

    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//
//
// @desc -  View LFM
// @route - api/lfm/view
// @access - private
// Db.lfm.findOne where id  = req.body.id (left join member  - keys: lfm.BandId = band.id
// band pic, band name, (from join)
// instrument, location, distance, ad, youtubeLink, (from lfg)
router.get('api/lfm/view', async (req, res) => {
  try {
    const listing = await db.lfm.findOne({
      where: {
        id: req.body.id
      },
      include: [db.Band]
    });

    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
