const express = require('express')
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')
const User = require('../../models/User')
const { check, validationResult } = require('express-validator')
const { update } = require('../../models/User')

const router = express.Router()

//@route  api/profile/me
//get current users profile
//private

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.find({ user: req.user.id }).populate('user', ['name', 'avatar','email']);
        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }
        res.json(profile);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }

})

router.delete('/delete/:id', (req, res) => {
    Profile.findByIdAndRemove(req.params.id)
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

//@route  api/profile
//post create a profile
//private
router.post('/', [auth,
    [
        check('desc', 'desc is required').not().isEmpty()

    ]], async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {
            title,
            desc
        } = req.body;

        //Build profile objects
        const profileFields = {}
        profileFields.user = req.user.id;
        if (title) profileFields.title = title;
        if (desc) profileFields.desc = desc;
        profileFields.likes = 0
        try {
            // let profile = await Profile.findOne({ user: req.user.id })
            // if (profile) {
            //     //update
            //     profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });

            //     return res.json(profile)
            // }
            //create
            profile = new Profile(profileFields)
            await profile.save();
            return res.json(profile)
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('server error')
        }
    })


router.post('/likes',auth,async (req,res)=>{
    console.log(req.params.id)
    const likes = await Profile.findOne({ user: req.user.id })
    return res.json(likes)
})


//@route  api/profile
//get  all profile
//public

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar','email','likes']);
        return res.json(profiles)
    }
    catch (err) {
        console.error(err.message)
        res.status(500).send('server error')
    }
})

module.exports = router;