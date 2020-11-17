const mongoose = require('mongoose')


const ProfileSchema =new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    title:{
        type: String,
    },
    desc:{
        type:String
    },
    likes:{
      type:Number
    },
    techStack:{
      type:String,
    },
    git:{
      type:String
    },
    rating:{
      type:String
    },
    date: {
        type: Date,
        default: Date.now
      }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);
