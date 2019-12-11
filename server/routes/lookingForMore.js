var db = require('../models');
// var passport = require('../config/passport');
const router = require('express').Router();

// var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

// @desc -  Upon load of discovery page, load LFM based off usermember location - hard coded for now....need to figure out geolocation/mysql
// @route - /api/listings/lfm/:zipcode
// @access - private
router.get('/api/listings/lfm/general/:zipcode', async (req, res) => {
  try {
    const loadlfmDiscovery = await db.lfm.findAll({
      where: {
        zipcode: req.params.zipcode
      },
      include: [{ model: db.Band, include: [db.User] }]
    });
    res.json(loadlfmDiscovery);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// group - create listing
// @desc -   Create LFM listing
// @route - api/lfm/create
// @access - private
// Db.lfm.create
//isAuthenticatedData, ... to be added after testing
router.post('/api/listings/lfm/create', async (req, res) => {
  const { youtubeLink, city, state, zipcode, ad, instrument } = req.body;

  try {
    if (!req.body.city) {
      return res.status(500).send('The city field cannot be blank');
    } else if (!req.body.state) {
      return res.status(500).send('The state field cannot be blank');
    } else if (!req.body.zipcode) {
      return res.status(500).send('The zip code field cannot be blank');
    } else if (!req.body.ad) {
      return res.status(500).send('The ad text cannot be left blank');
    } else if (!req.body.instrument) {
      return res.status(500).send('You must select your instrument');
    }
    const member = await db.Member.findOne({
      where: {
        UserId: req.user.id
      }
    });
    const band = await db.Band.findOne({
      where: {
        UserId: req.user.id
      }
    });
    const newListing = {
      youtubeLink,
      city,
      state,
      zipcode,
      ad,
      instrument,
      BandId: band.id,
      MemberId: member.id
    };

    const listing = await db.lfm.create(newListing);

    res.json(listing);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// @desc -  Search lfms
// @route - api/lfm/searchlfm
// @access - private
router.post('/api/listings/lfm/search', async (req, res) => {
  try {
    const { city, state, zipcode, instrument } = req.body;
    const searchWhat = {};
    if (city) searchWhat.city = city;
    if (state) searchWhat.state = state;
    if (zipcode) searchWhat.zipcode = zipcode;
    if (instrument) searchWhat.instrument = instrument;

    const loadlfmDiscovery = await db.lfm.findAll({
      where: searchWhat,
      include: [{ model: db.Band, include: [db.User] }]
    });
    res.json(loadlfmDiscovery);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

// @desc -  delete usermember lfm
// @route - api/listings/lfm/delete
// @access - private

router.delete('/api/listings/lfm/delete/:id', async (req, res) => {
  try {
    const lfm = await db.lfm.destroy({
      where: {
        id: req.params.id,
        MemberId: req.user.id
      }
    });
    console.log('IM HERE');
    res.json({
      message: `Your looking-for-member listing was deleted successfully`
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
