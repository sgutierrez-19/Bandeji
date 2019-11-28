// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');
const router = require('express').Router();

var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

// @desc -  band signup - creates band name and location
// @route - api/band/signup
// @access - public
// db.band.create
//
// router.post('/api/band/signup', async (req, res) => {
//   try {
//     if (!req.body.bandName) {
//       return res.status(500).send('You must enter a band name.');
//     } else if (!req.body.city) {
//       return res.status(500).send('The city field cannot be blank');
//     } else if (!req.body.state) {
//       return res.status(500).send('The state field cannot be blank');
//     } else if (!req.body.zipcode) {
//       return res.status(500).send('The zip code field cannot be blank');
//     }
//     const band = await db.Band.create({
//       bandName: req.body.bandName,
//       bandPicture: req.body.bandPicture,
//       city: req.body.city,
//       state: req.body.state,
//       zipcode: req.body.zipcode,
//       latitude: req.body.latitude,
//       longitude: req.body.longitude,
//       UserId: req.user.id
//     });

//     res.json({ band });
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).send('Server Error');
//   }
// });
//
//
// @desc -  user member creation
// @route - api/band/usermember
// @access - private
// Db.member.create
// Db.memberinstrument.create
// db.bandmember.create
//
router.post('/api/member/bandusermember/signup', async (req, res) => {
  try {
    if (!req.body.memberName) {
      return res.status(500).send('The name field cannot be blank');
    } else if (!req.body.bandCity || !req.body.memberCity) {
      return res.status(500).send('The city field cannot be blank');
    } else if (!req.body.bandState || !req.body.memberState) {
      return res.status(500).send('The state field cannot be blank');
    } else if (!req.body.bandZipcode || !req.body.memberZipcode) {
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
      UserId: req.user.id
    });
    const member = await db.Member.create({
      memberName: req.body.memberName,
      city: req.body.memberCity,
      state: req.body.memberState,
      zipcode: req.body.memberZipcode,
      latitude: req.body.memberLatitude,
      longitude: req.body.memberLongitude,
      profilePicture: req.body.memberProfilePicture,
      createdByUserId: req.user.id,
      // req.body.UserId comes from state
      UserId: req.user.id
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
    res.json({ member, band, memberInstrument, bandMember });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});
//
// @desc -  additional band member creation - does not have userID
// @route - api/band/bandmember
// @access - private
// Db.member.create;
// Db.memberinstrument.create;
// db.bandmember.create;
//
router.post('/api/member/bandmember/signup', async (req, res) => {
  try {
    if (!req.body.bMemberName) {
      return res.status(500).send('The name field cannot be blank');
    } else if (!req.body.bMemberCity) {
      return res.status(500).send('The city field cannot be blank');
    } else if (!req.body.bMemberState) {
      return res.status(500).send('The state field cannot be blank');
    } else if (!req.body.bMemberZipcode) {
      return res.status(500).send('The zip code field cannot be blank');
    } else if (!req.body.instrument) {
      return res.status(500).send('The instrument field cannot be blank');
    }
    const band = await db.Band.findOne({
      where: {
        UserId: req.user.id
      }
    });
    const member = await db.Member.create({
      memberName: req.body.bMemberName,
      city: req.body.bMemberCity,
      state: req.body.bMemberState,
      zipcode: req.body.bMemberZipcode,
      latitude: req.body.bMemberLatitude,
      longitude: req.body.bMemberLongitude,
      profilePicture: req.body.bMemberProfilePicture,
      createdByUserId: req.user.id
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
    res.json({ member, memberInstrument, bandMember });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});

////////////////////////// STILL WORKING THROUGH///////////////

// @desc -  route for usermember to update members in their band (if that                   member doesn't have an associated UserId AND usermember was the                 user to create them originally)
// @route - api/member/updategroupmember
// @access - private
router.put('/api/member/updatebandmember/:id', async (req, res) => {
  try {
    if (!req.body.memberName) {
      return res.status(500).send('The name field cannot be blank');
    } else if (!req.body.city) {
      return res.status(500).send('The city field cannot be blank');
    } else if (!req.body.state) {
      return res.status(500).send('The state field cannot be blank');
    } else if (!req.body.zipcode) {
      return res.status(500).send('The zip code field cannot be blank');
    }
    const memberToUpdate = await db.Member.findOne({
      where: {
        id: req.params.id,
        createdByUserId: req.user.id
      }
    });
    if (
      memberToUpdate.UserId !== null &&
      memberToUpdate.createdByUserId !== req.user.id
    ) {
      return res
        .status(500)
        .send(
          'You may no longer edit this member as there is now an account associated with it'
        );
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
          id: req.params.id,
          createdByUserId: req.user.id
        }
      }
    );
    res.json(member);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});

// @desc -  updates instrument string (from state)
// @route - api/individual/update
// @access - private
router.put('/api/member/updatebandmemberinstrument/:id', async (req, res) => {
  try {
    if (!req.body.instrument) {
      return res.status(500).send('The instrument field cannot be blank');
    }
    // NEEDS TO CHECK MEMBER TO MAKE SURE THAT CREATEDBYUSERID =
    // REQ.USER.ID && THAT USERID IS EMPTY && THROW ERROR IF NOT
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
    return res.status(500).send('Server Error');
  }
});

// ADD 1 ROUTE TO UPDATE 'BAND' NAME, LOCATION, & PROFILE PIC

////////////////////// END STILL WORKING THROUGH///////////////

module.exports = router;
