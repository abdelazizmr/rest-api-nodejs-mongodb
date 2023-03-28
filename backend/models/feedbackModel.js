const mongoose = require('mongoose')
const commentSchema = require('./commentModel')


const feedbackSchema  = mongoose.Schema({
      title : {
        type : String,
        requied : true
      },
      category: String ,
      description: String,
      upvotes: Number,
      status: String,
       comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
    },
    {
      timestamps : true
    }
)



module.exports = mongoose.model('feedback', feedbackSchema)
