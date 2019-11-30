// Requiring our models and passport as we've configured it
var db = require('../models');

const router = require('express').Router();

var isAuthenticated = require('../config/middleware/isAuthenticated');

// @desc -  As individual, upon going to 'edit profile' page, query lfg to pull //          all lfg listings by user via member id stored in state
// @route - api/individual/profile
// @access - private
router.get('/api/member/listings/lfg', async (req, res) => {
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
    if (!req.body.memberName) {
      return res.status(500).send('The name field cannot be blank');
    } else if (!req.body.city) {
      return res.status(500).send('The city field cannot be blank');
    } else if (!req.body.state) {
      return res.status(500).send('The state field cannot be blank');
    } else if (!req.body.zipcode) {
      return res.status(500).send('The zip code field cannot be blank');
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

// @desc -  route to get all information about a usermember (pulls more if is               in band).  USED AFTER ANY UPDATE
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
    const isInBand = await db.BandMember.findOne({
      where: { MemberId: member.id }
    });

    if (isInBand) {
      const band = await db.Band.findOne({
        where: {
          UserId: req.user.id
        }
      });
      const bandMembers = await db.BandMember.findAll({
        where: { BandId: band.id }
      });

      const bandMembersInfo = [];
      for (let i = 0; i < bandMembers.length; i++) {
        const bandMembersInfoProcess = await db.Member.findOne({
          where: {
            id: bandMembers[i].MemberId
          }
        });
        const memberInstrumentsProcess = await db.MemberInstrument.findAll({
          where: {
            MemberId: bandMembers[i].MemberId
          }
        });
        bandMembersInfo.push({
          bandmember: bandMembers[i],
          member: bandMembersInfoProcess,
          memberinstrument: memberInstrumentsProcess
        });
      }
      res.json({
        userMember: member,
        band,
        bandMembersInfo
      });
    } else if (!isInBand) {
      res.json(member);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
