const mongoose = require('mongoose')


const ProfileSchema =new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    task:{
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
      }
})

module.exports = Todo = mongoose.model('todo', ProfileSchema);
