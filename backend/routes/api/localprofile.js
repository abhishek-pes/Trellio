const express = require('express')
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const { check, validationResult } = require('express-validator')
const { update } = require('../../models/User')
const LocalGuide = require('../../models/LocalGuide')
const LocalProfile = require('../../models/LocalProfile')

const router = express.Router()

//@route  api/profile/me
//get current users profile
//private

router.get('/me', auth, async (req, res) => {
    try{
        const profile = await LocalProfile.findOne({ user:LocalGuide.id}).populate('user', ['name', 'avatar']);
        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }
        res.json(profile);
    }
    catch(err)
    {   
        console.error(err.message)
        res.status(500).send("server error")
    }
})
router.delete('/delete/:id', (req, res) => {
    Profile.findByIdAndRemove(LocalGuide.id)
        .then((doc) => {
            if (!doc) {
                res.send("Not found")
            }
            res.send(doc)
        }).catch((err) => {
            console.log(err.message)
            res.send({ error: err.message })
        })
})

router.post('/', [auth,
    [
        check('bio', 'bio is required').not().isEmpty(),
        check('experience','experience is required').not().isEmpty()

    ]], async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {
            place,
            bio,
            experience
        } = req.body;

        //Build profile objects
        const profileFields = {}
        profileFields.user = LocalGuide.id;
        if (place) profileFields.place = place;
        if (bio) profileFields.bio = bio;
        if (experience) profileFields.experience =experience;

        try {
            let profile = await LocalProfile.findOne({ user: LocalGuide.id })
            if (profile) {
                //update
                profile = await LocalProfile.findOneAndUpdate({ user: LocalGuide.id }, { $set: profileFields }, { new: true });

                return res.json(profile)
            }
            //create
            profile = new LocalProfile(profileFields)
            await profile.save();
            return res.json(profile)
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('server error')
        }
    })

//@route  api/profile
//get  all profile
//public

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('users', ['name', 'avatar']);
        return res.json(profiles)
    }
    catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }
})
module.exports = router;