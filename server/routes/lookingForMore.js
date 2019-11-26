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
router.post('/api/lfm/create', async (req, res) => {
  const { youtubeLink, city, state, zipcode, ad, instrument } = req.body;

  try {
    if (!req.body.city) {
      throw new Error('The city field cannot be blank');
    } else if (!req.body.state) {
      throw new Error('The state field cannot be blank');
    } else if (!req.body.zipcode) {
      throw new Error('The zip code field cannot be blank');
    } else if (!req.body.ad) {
      throw new Error('The ad text cannot be left blank');
    } else if (!req.body.instrument) {
      throw new Error('You must select your instrument');
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
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//

/////////////// BEGIN STILL WORKING AREA //////////////

//////////////////IS THIS SUPPOSED TO SHOW ALL LFMS TO A USERMEMBER THAT THEY HAVE CREATED?  iF SO - SWITCH LFM AND MEMBER BELOW && CHANGE ID -> USERID
// @desc -  View LFM
// @route - api/lfm/view
// @access - private
// Db.lfm.findOne where id  = req.body.id (left join member  - keys: lfm.BandId = band.id
// band pic, band name, (from join)
// instrument, location, distance, ad, youtubeLink, (from lfg)
router.get('/api/lfm/view', async (req, res) => {
  try {
    const listing = await db.lfm.findOne({
      where: {
        id: req.user.id
      },
      include: [db.Member]
    });

    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// NEEDS TO BE CHANGED FROM LFG PARAMS TO LFM PARAMS
// @desc -  Search lfms
// @route - api/lfm/searchlfm
// @access - private
router.get('/api/lfm/searchlfm', async (req, res) => {
  try {
    if (
      !req.body.instrument &&
      !req.body.city &&
      !req.body.state &&
      !req.body.zipcode
    ) {
      throw new Error('Your search parameters may not be blank');
    } else if (!req.body.instrument) {
      throw new Error('The instrument field may not be blank');
    } else if (!req.body.city && !req.body.zipcode) {
      throw new Error('Please enter city/state or zip code');
    } else if (!req.body.state && !req.body.zipcode) {
      throw new Error('Please enter city/state or zip code');
    } else if (req.body.zipcode) {
      const loadlfgDiscovery = await db.lfg.findAll({
        where: {
          zipcode: req.body.zipcode,
          instrument: req.body.instrument
        }
      });
      res.json({ loadlfgDiscovery });
    } else if (req.body.city && req.body.state && !req.body.zipcode) {
      const loadlfgDiscovery = await db.lfg.findAll({
        where: {
          city: req.body.city,
          state: req.body.state,
          instrument: req.body.instrument
        }
      });
      res.json({ loadlfgDiscovery });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/////////////// END STILL WORKING AREA //////////////

module.exports = router;
