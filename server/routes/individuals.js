// Requiring our models and passport as we've configured it
var db = require('../models');

const router = require('express').Router();

var isAuthenticated = require('../config/middleware/isAuthenticated');

// @desc -  individual signup
// @route - api/individual/signup
// @access - public

router.post('/api/individual/signup', async (req, res) => {
  try {
    if (!req.body.memberName) {
      throw new Error('The name field cannot be blank');
    } else if (!req.body.city) {
      throw new Error('The city field cannot be blank');
    } else if (!req.body.state) {
      throw new Error('The state field cannot be blank');
    } else if (!req.body.zipcode) {
      throw new Error('The zip code field cannot be blank');
    } else if (!req.body.instrument) {
      throw new Error('The instrument field cannot be blank');
    }
    const member = await db.Member.create({
      memberName: req.body.memberName,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      profilePicture: req.body.profilePicture,
      createdByUserId: req.user.id,
      // req.body.UserId comes from state
      UserId: req.user.id
    });
    const memberInstrument = await db.MemberInstrument.create({
      instrument: req.body.instrument,
      MemberId: member.id
    });
    res.json({ member, memberInstrument });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// // @desc -  individual login
// // @route - api/individual/login
// // @access - public
// // Db.member.create
// // Db.memberinstrument.create
//
//

// @desc -  As individual, upon going to 'edit profile' page, query lfg to pull //          all lfg listings by user via member id stored in state
// @route - api/individual/profile
// @access - private
router.get('/api/individual/profile', async (req, res) => {
  try {
    const member = await db.Member.findOne({
      include: [db.lfg],
      where: {
        UserId: req.user.id
      }
    });
    res.json({ lfgs: member.lfgs });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @desc -  individual update( where->MemberId:1 is hard coded atm.  Will need              to change later (ONCE a validation/ is added) to pull id from the               profile state...is this passed              to url so maybe route               will be /api/individual/update/:id?)
// @route - api/individual/update
// @access - private
router.put('/api/individual/updatemember', async (req, res) => {
  try {
    if (!req.body.memberName) {
      throw new Error('The name field cannot be blank');
    } else if (!req.body.city) {
      throw new Error('The city field cannot be blank');
    } else if (!req.body.state) {
      throw new Error('The state field cannot be blank');
    } else if (!req.body.zipcode) {
      throw new Error('The zip code field cannot be blank');
    }
    const member = await db.Member.update(
      {
        memberName: req.body.memberName,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        profilePicture: req.body.profilePicture
      },
      {
        where: {
          UserId: req.user.id
        }
      }
    );
    res.json(member);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @desc -  updates instrument string (from state)
// @route - api/individual/update
// @access - private
router.put('/api/individual/updateinstrument/:id', async (req, res) => {
  try {
    if (!req.body.instrument) {
      throw new Error('The instrument field cannot be blank');
    }
    const member = await db.Member.findOne({
      where: {
        UserId: req.user.id
      }
    });
    const instrument = await db.MemberInstrument.update(
      {
        instrument: req.body.instrument
      },
      {
        where: {
          MemberId: member.id,
          id: req.params.id
        }
      }
    );
    res.json({ instrument });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
