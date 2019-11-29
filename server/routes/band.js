// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');
const router = require('express').Router();

var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

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

// @desc -  route for usermember to update members in their band (if that                   member doesn't have an associated UserId AND usermember was the                 user to create them originally)
// @route - api/member/updategroupmember
// @access - private
router.put('/api/member/updatebandmember/:id', async (req, res) => {
  try {
    if (!req.body.bMemberName) {
      return res.status(500).send('The name field cannot be blank');
    } else if (!req.body.bMemberCity) {
      return res.status(500).send('The city field cannot be blank');
    } else if (!req.body.bMemberState) {
      return res.status(500).send('The state field cannot be blank');
    } else if (!req.body.bMemberZipcode) {
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
        .send(`You do not have permission to edit this member`);
    }
    const member = await db.Member.update(
      {
        memberName: req.body.bMemberName,
        city: req.body.bMemberCity,
        state: req.body.bMemberState,
        zipcode: req.body.bMemberZipcode,
        latitude: req.body.bMemberLatitude,
        longitude: req.body.bMemberLongitude,
        profilePicture: req.body.bMemberProfilePicture
      },
      {
        where: {
          id: req.params.id,
          createdByUserId: req.user.id
        }
      }
    );
    res.json({ message: `Your band member was updated successfully` });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});

// @desc -  route for usermember to update the instrument of a member he's created so long as member does not have a userId assigned
// @route - api/individual/update
// @access - private
router.put('/api/member/updatebandmemberinstrument/:id', async (req, res) => {
  try {
    if (!req.body.instrument) {
      return res.status(500).send('The instrument field cannot be blank');
    }
    const findMember = await db.MemberInstrument.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Member]
    });
    if (
      findMember.Member.createdByUserId === req.user.id &&
      findMember.Member.UserId === null
    ) {
      const instrument = await db.MemberInstrument.update(
        {
          instrument: req.body.instrument
        },
        {
          where: {
            MemberId: findMember.Member.id,
            id: req.params.id
          }
        }
      );
      res.json({
        message: `${findMember.Member.memberName}'s instrument has been updated successfully`
      });
    } else {
      return res
        .status(500)
        .send(`You do not have permission to edit this member's instrument`);
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});

// @desc -  updates usermember's associated band table's name, location and band pic
// @route - api/band/update
// @access - private
router.put('/api/band/update', async (req, res) => {
  try {
    if (!req.body.bandName) {
      return res.status(500).send('The band name field cannot be blank');
    } else if (!req.body.bandCity) {
      return res.status(500).send('The city field cannot be blank');
    } else if (!req.body.bandState) {
      return res.status(500).send('The state field cannot be blank');
    } else if (!req.body.bandZipcode) {
      return res.status(500).send('The zip code field cannot be blank');
    }
    const band = db.Band.update(
      {
        bandName: req.body.bandName,
        bandPicture: req.body.bandPicture,
        city: req.body.bandCity,
        state: req.body.bandState,
        zipcode: req.body.bandZipcode,
        latitude: req.body.bandLatitude,
        longitude: req.body.bandLongitude
      },
      {
        where: {
          UserId: req.user.id
        }
      }
    );
    res.json({ message: `Your band has been updated successfully` });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
