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
        const band = await db.Band.create({
            bandName: req.body.bandName,
            location: `${req.body.city}, ${req.body.state}`

        })
        if (!req.body.bandName) {
            throw new Error("You must enter a band name.");
        } else if (!req.body.city) {
            throw new Error("The city field cannot be blank");
        } else if (!req.body.state) {
            throw new Error("The state field(s) cannot be blank");
        }
        res.json({ band });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Sever Error');
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
router.post('/api/band/usermember', async (req, res) => {
    try {
        const member = await db.Member.create({
            memberName: req.body.memberName,
            location: `${req.body.city}, ${req.body.state}`,
            profilePicture: req.body.profilePicture,
            // UserId: req.user.id
        })
        const memberInstrument = await db.MemberInstrument.create({
            instrument: req.body.instrument,
            // MemberId: this.member.id
        });
        if (!req.body.memberName) {
            throw new Error("The name field cannot be blank");
        } else if (!req.body.city) {
            throw new Error("The city field cannot be blank");
        } else if (!req.body.state) {
            throw new Error("The state field(s) cannot be blank");
        } else if (!req.body.instrument) {
            throw new Error("The state field(s) cannot be blank");
        }
        res.json({ member, memberInstrument });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Sever Error');
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
        const member = await db.Member.create({
            memberName: req.body.memberName,
            location: `${req.body.city}, ${req.body.state}`,
            profilePicture: req.body.profilePicture,
        })
        const memberInstrument = await db.MemberInstrument.create({
            instrument: req.body.instrument,
            // MemberId: this.member.id
        });
        if (!req.body.memberName) {
            throw new Error("The name field cannot be blank");
        } else if (!req.body.city) {
            throw new Error("The city field cannot be blank");
        } else if (!req.body.state) {
            throw new Error("The state field(s) cannot be blank");
        } else if (!req.body.instrument) {
            throw new Error("The state field(s) cannot be blank");
        }
        res.json({ member, memberInstrument });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Sever Error');
    }
})

module.exports = router;
