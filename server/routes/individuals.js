// Requiring our models and passport as we've configured it
var db = require('../models');
var passport = require('../config/passport');
const router = require('express').Router();

var isAuthenticatedData = require('../config/middleware/isAuthenticatedData');

// @desc -  individual signup
// @route - api/individual/signup
// @access - public

router.post("/api/individual/signup", async (req, res) => {
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
})

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
router.get('/api/individual/profile/:id', async (req, res) => {
    try {
        const userListings = await db.lfg.findAll({
            where: {
                MemberId: req.params.id
            }
        })
        res.json({ userListings })
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Sever Error');
    }
})



// @desc -  individual update( where->MemberId:1 is hard coded atm.  Will need              to change later (ONCE a validation/ is added) to pull id from the               profile state...is this passed              to url so maybe route               will be /api/individual/update/:id?)
// @route - api/individual/update
// @access - private
router.put('/api/individual/updatemember', async (req, res) => {
    try {
        const member = await db.Member.update({
            memberName: req.body.memberName,
            location: `${req.body.city}, ${req.body.state}`,
            profilePicture: req.body.profilePicture,
        },
            {
                where: {
                    id: 1
                }
            })
        if (!req.body.memberName) {
            throw new Error("The name field cannot be blank");
        } else if (!req.body.city) {
            throw new Error("The city field cannot be blank");
        } else if (!req.body.state) {
            throw new Error("The state field(s) cannot be blank");
        }
        res.json(member)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Sever Error');
    }
});



// @desc -  updates instrument string (from state)
// @route - api/individual/update
// @access - private
router.put('/api/individual/updateinstrument/:id', async (req, res) => {
    try {
        const instrument = await db.MemberInstrument.update({
            instrument: req.body.instrument
        }, {
            where: {
                id: req.params.id
            }
        })
        if (!req.body.instrument) {
            throw new Error("The instrument field cannot be blank");
        }
        res.json({ instrument })
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Sever Error');
    }
})


module.exports = router;
