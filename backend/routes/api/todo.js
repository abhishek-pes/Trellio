const express = require('express')
const auth = require('../../middleware/auth')
const Todo = require('../../models/Todo')
const User = require('../../models/User')
const { check, validationResult } = require('express-validator')
const { update } = require('../../models/User')

const router = express.Router()
router.get('/tasks', auth, async (req, res) => {
    try {
        const todo = await Todo.find({ user: req.user.id }).populate('user', ['name']);
        if (!todo) {
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }
        res.json(todo);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }

})

router.delete('/delete/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id)
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
        check('task', 'task is required').not().isEmpty()

    ]], async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {
            task,
        } = req.body;

        //Build profile objects
        const profileFields = {}
        profileFields.user = req.user.id;
        if (task) profileFields.task = task;
        try {
            // let profile = await Profile.findOne({ user: req.user.id })
            // if (profile) {
            //     //update
            //     profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });

            //     return res.json(profile)
            // }
            //create
            todo = new Todo(profileFields)
            await todo.save();
            return res.json(todo)
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('server error')
        }
    })
module.exports = router;