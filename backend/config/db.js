const mongoose = require('mongoose')


mongoose.set('strictQuery', false);

const conncetDB = async () =>{
   mongoose.connect("mongodb://0.0.0.0:27017/feedback-app")
}

module.exports  = conncetDB