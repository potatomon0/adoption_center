const mongoose = require('mongoose')

const catsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    HadFirstCheckUp: Boolean,
    description:{type:String, required:true}
})
const Cats = mongoose.model('Cats',catsSchema)

module.exports = Cats