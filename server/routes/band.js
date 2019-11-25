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
router.post('/api/band/signup', async (req, res) => {
    try {
        if (!req.body.bandName) {
            throw new Error("You must enter a band name.");
        } else if (!req.body.city) {
            throw new Error("The city field cannot be blank");
        } else if (!req.body.state) {
            throw new Error("The state field cannot be blank");
        } else if (!req.body.zipcode) {
            throw new Error("The zip code field cannot be blank");
        }
        const band = await db.Band.create({
            bandName: req.body.bandName,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            UserId: req.user.id
        })

        res.json({ band });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});
//
//
// @desc -  user member creation
// @route - api/band/usermember
// @access - private
// Db.member.create
// Db.memberinstrument.create
// db.bandmember.create
//
router.post('/api/band/usermember/', async (req, res) => {
    try {
        if (!req.body.memberName) {
            throw new Error("The name field cannot be blank");
        } else if (!req.body.city) {
            throw new Error("The city field cannot be blank");
        } else if (!req.body.state) {
            throw new Error("The state field cannot be blank");
        } else if (!req.body.zipcode) {
            throw new Error("The zip code field cannot be blank");
        } else if (!req.body.instrument) {
            throw new Error("The instrument field cannot be blank");
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
        const bandMember = await db.BandMember.create({
            instrument: req.body.instrument,
            MemberId: member.id,
            BandId: req.body.bandId
        });
        res.json({ member, memberInstrument, bandMember });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
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
router.post('/api/band/bandmember', async (req, res) => {
    try {
        if (!req.body.memberName) {
            throw new Error("The name field cannot be blank");
        } else if (!req.body.city) {
            throw new Error("The city field cannot be blank");
        } else if (!req.body.state) {
            throw new Error("The state field cannot be blank");
        } else if (!req.body.zipcode) {
            throw new Error("The zip code field cannot be blank");
        } else if (!req.body.instrument) {
            throw new Error("The instrument field cannot be blank");
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
        });
        const memberInstrument = await db.MemberInstrument.create({
            instrument: req.body.instrument,
            MemberId: member.id
        });
        const bandMember = await db.BandMember.create({
            instrument: req.body.instrument,
            MemberId: member.id,
            BandId: req.body.bandId
        });
        res.json({ member, memberInstrument, bandMember });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;
