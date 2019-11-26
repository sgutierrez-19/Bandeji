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
router.post('/api/lfg/create', async (req, res) => {
  const {
    youtubeLink,
    city,
    state,
    zipcode,
    distance,
    ad,
    instrument,
    MemberId
  } = req.body;
  try {
    if (!req.body.city) {
      throw new Error('The city field cannot be blank');
    } else if (!req.body.state) {
      throw new Error('The state field cannot be blank');
    } else if (!req.body.zipcode) {
      throw new Error('The zip code field cannot be blank');
    } else if (!req.body.distance) {
      throw new Error('Please select a distance you are willing to travel');
    } else if (!req.body.ad) {
      throw new Error('The ad text cannot be left blank');
    } else if (!req.body.instrument) {
      throw new Error('You must select your instrument');
    }
    const newListing = {
      youtubeLink,
      city,
      state,
      zipcode,
      distance,
      ad,
      instrument,
      MemberId
    };
    const listing = await db.lfg.create(newListing);
    res.json(listing);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//  View listings page
// @desc -  View LFG
// @route - api/lfg/view
// @access - private
// Db.lfg.findOne where id  = req.body.id
// //isAuthenticatedData, ... to be added after testing
// router.get('/api/lfg/view', async (req, res) => {
//   try {
//     const listing = await db.lfg.findOne({
//       where: {
//         id: req.body.id
//       },
//       include: [db.Member]
//     });
//     res.json(listing);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// @desc -  Upon load of discovery page, load lfg/lfm based off usermember location - hard coded for now....need to figure out geolocation/mysql
// @route - api/lfg/view(WILL NEED TO BE CHANGED)
// @access - private
router.get('/api/lfg/view', async (req, res) => {
  try {
    const loadlfgDiscovery = await db.lfg.findAll({
      where: {
        zipcode: req.body.zipcode
      }
    });
    const loadlfmDiscovery = await db.lfm.findAll({
      where: {
        zipcode: req.body.zipcode
      }
    });
    res.json({ loadlfgDiscovery, loadlfmDiscovery });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//
//
// @desc -  View LFG
// @route - api/lfg/view
// @access - private
router.get('/api/lfg/searchlfg', async (req, res) => {
  try {
    if (!req.body.instrument && !req.body.city && !req.body.state) {
      throw new Error('Your search parameters cannot be blank');
    } else if (req.body.instrument && req.body.city && req.body.state) {
      const loadlfgDiscovery = await db.lfg.findAll({
        where: {
          city: req.body.city,
          state: req.body.state,
          zipcode: req.body.zipcode,
          instrument: req.body.instrument
        }
      });
      res.json({ loadlfgDiscovery });
    } else if (req.body.instrument && req.body.city && req.body.state) {
      const loadlfgDiscovery = await db.lfg.findAll({
        where: {
          city: req.body.city,
          state: req.body.state,
          zipcode: req.body.zipcode,
          instrument: req.body.instrument
        }
      });
      res.json({ loadlfgDiscovery });
    } else if (!req.body.instrument) {
      const loadlfgDiscovery = await db.lfg.findAll({
        where: {
          city: req.body.city,
          state: req.body.state,
          zipcode: req.body.zipcode
        }
      });
      res.json({ loadlfgDiscovery });
    } else if (!req.body.city || !req.body.state) {
      const loadlfgDiscovery = await db.lfg.findAll({
        where: {
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

// Db.lfg.findOne where id  = req.body.id (left join member  - keys: lfg.MemberId = member.id
// profile pic, member name, (from join)
// instrument, location, distance, ad, youtubeLink, (from lfg)

module.exports = router;
