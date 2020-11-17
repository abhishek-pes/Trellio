const express = require('express')
const { check,validationResult } = require('express-validator')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../../models/User')

const router = express.Router()

//@route  api/users
//public
//post

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','include a valid email').isEmail(),
    check('password','Please enter a password more than 6 words').isLength({min : 6})

] ,
async (req,res) => 
{
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json({ errors : errors.array() })
    }
    const {name ,email ,password} = req.body

    try{

    //if the user exist

    let user = await User.findOne({ email })
    if (user)
    {
        return res.status(400).json({ error : [{msg : 'user alreadqy exists'}]});
    } 

    //get users gravatar

    const avatar = gravatar.url(email , {
        s : '200',
        r : 'pg',
        d : 'mm'
    });
    user = new User({
        name,
        email,
        avatar,
        password
    });

    //encrypt the password using bcrypt

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password , salt);

    await user.save()

    //return the json web token
    const payload = {
        user:{
            id : user.id
        }
    }

    jwt.sign(payload , config.get('jwtsecret'),{expiresIn : 36000} , (err,token) => {
        if(err) throw err;
        res.json({token})
    })
    }
    catch(err)
    {
        console.log(err.message)
        res.status(500).send('server bad')
    }

    

});

module.exports = router;