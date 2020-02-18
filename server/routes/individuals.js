// Requiring our models and passport as we've configured it
var db = require('../models');

const router = require('express').Router();

var isAuthenticated = require('../config/middleware/isAuthenticated');

// @desc -  As individual, upon going to 'edit profile' page, query lfg to pull //          all lfg listings by user via member id stored in state
// @route - api/individual/profile
// @access - private
router.get('/api/member/listings', async (req, res) => {
  try {
    const member = await db.Member.findOne({
      where: {
        UserId: req.user.id
      }
    });
    const isInBand = await db.BandMember.findOne({
      where: { MemberId: member.id }
    });
    if (isInBand) {
      console.log('Is in band');
      const lfm = await db.lfm.findAll({
        where: {
          MemberId: member.id
        }
      });
      res.json(lfm);
    } else if (!isInBand) {
      console.log('Is solo');
      const lfg = await db.lfg.findAll({
        where: {
          MemberId: member.id
        }
      });
      res.json(lfg);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @desc -  route for usermember to update their own member table (edit profile)
// @route - api/member/update
// @access - private
router.put('/api/member/updateusermember', async (req, res) => {
  try {
    const { memberName, city, state, zipcode, profilePicture } = req.body;
    const toUpdate = {};
    if (memberName) toUpdate.memberName = memberName;
    if (city) toUpdate.city = city;
    if (state) toUpdate.state = state;
    if (zipcode) toUpdate.zipcode = zipcode;
    if (profilePicture) toUpdate.profilePicture = profilePicture;
    console.log(toUpdate);

    const member = await db.Member.update(toUpdate, {
      where: {
        UserId: req.user.id
      }
    });
    res.json(member);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

// @desc -  route for usermember to update their own memberinstrument entries
// @route - api/member/update
// @access - private
router.put('/api/member/updateusermemberinstrument/:id', async (req, res) => {
  try {
    if (!req.body.instrument) {
      return res.status(500).send('The instrument field cannot be blank');
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

// @desc -  route to get all information about a usermember
// @route - api/member/usermember
// @access - private
router.get('/api/member/usermember', async (req, res) => {
  try {
    const member = await db.Member.findOne({
      where: {
        UserId: req.user.id
      },
      include: [db.MemberInstrument]
    });
    res.json(member);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
