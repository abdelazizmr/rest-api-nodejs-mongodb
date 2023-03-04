const mongoose = require('mongoose')


const feedbackSchema  = mongoose.Schema({
      title : {
        type : String,
        requied : true
      },
      category: String ,
      description: String
    },
    {
      timestamps : true
    }
)

module.exports = mongoose.model('feedback', feedbackSchema)
