// Requiring our models and passport as we've configured it
const db = require('../models');
const passport = require('../config/passport');
const router = require('express').Router();

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

//
router.get('/api/auth', async (req, res) => {
  if (req.user) {
    // The user is not logged in, send back an empty object
    res.status(200).send('logged in');
  } else {
    res.status(401).send('logged out');
  }
});

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post('/api/login', passport.authenticate('local'), async (req, res) => {
  try {
    const member = await db.Member.findOne({
      where: {
        UserId: req.user.id
      },
      include: [db.MemberInstrument]
    });
    const isInBand = await db.BandMember.findOne({
      where: { MemberId: member.id }
    });
    if (isInBand) {
      res.json({
        email: req.user.email,
        id: req.user.id,
        member,
        inBand: true
      });
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
        member,
        inBand: false
      });
    }

    // }
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post('/api/signup', async (req, res) => {
  try {
    if (req.body.type === 'Individual') {
      const user = await db.User.create({
        email: req.body.email,
        password: req.body.password,
        userName: req.body.username
      });
      if (!req.body.name) {
        return res.status(500).send('The name field cannot be blank');
      } else if (!req.body.city) {
        return res.status(500).send('The city field cannot be blank');
      } else if (!req.body.state) {
        return res.status(500).send('The state field cannot be blank');
      } else if (!req.body.zipcode) {
        return res.status(500).send('The zip code field cannot be blank');
      } else if (!req.body.instrument) {
        return res.status(500).send('The instrument field cannot be blank');
      }
      const member = await db.Member.create({
        memberName: req.body.name,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        profilePicture: req.body.profilePicture,
        createdByUserId: user.id,
        UserId: user.id
      });
      const memberInstrument = await db.MemberInstrument.create({
        instrument: req.body.instrument,
        MemberId: member.id
      });
      res.redirect(307, '/api/login');
    } else if (req.body.type === 'Band') {
      const user = await db.User.create({
        email: req.body.email,
        password: req.body.password,
        userName: req.body.username
      });
      if (!req.body.name) {
        return res.status(500).send('The name field cannot be blank');
      } else if (!req.body.bandCity || !req.body.city) {
        return res.status(500).send('The city field cannot be blank');
      } else if (!req.body.bandState || !req.body.state) {
        return res.status(500).send('The state field cannot be blank');
      } else if (!req.body.bandZipcode || !req.body.zipcode) {
        return res.status(500).send('The zip code field cannot be blank');
      } else if (!req.body.instrument) {
        return res.status(500).send('The instrument field cannot be blank');
      } else if (!req.body.bandName) {
        return res.status(500).send('You must enter a band name');
      }
      const band = await db.Band.create({
        bandName: req.body.bandName,
        bandPicture: req.body.bandPicture,
        city: req.body.bandCity,
        state: req.body.bandState,
        zipcode: req.body.bandZipcode,
        latitude: req.body.bandLatitude,
        longitude: req.body.bandLongitude,
        UserId: user.id
      });
      const member = await db.Member.create({
        memberName: req.body.name,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        profilePicture: req.body.profilePicture,
        createdByUserId: user.id,
        UserId: user.id
      });
      const memberInstrument = await db.MemberInstrument.create({
        instrument: req.body.instrument,
        MemberId: member.id
      });
      const bandMember = await db.BandMember.create({
        instrument: req.body.instrument,
        MemberId: member.id,
        BandId: band.id
      });
      res.redirect(307, '/api/login');
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json(error);
  }
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Route for logging user out
router.post('/api/logout', (req, res) => {
  req.logout();
  res.json({});
});

// Route for getting some data about our user to be used client side
router.get('/api/user_data', (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      userName: req.user.userName,
      id: req.user.id
    });
  }
});

module.exports = router;
