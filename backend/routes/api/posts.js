const express = require('express')

const router = express.Router()

//@route  api/posts
//public

router.post('/', (req,res) => {

    console.log(req.body)
    res.send('posts route')
    
});

module.exports = router;