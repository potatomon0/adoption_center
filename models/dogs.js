const mongoose = require('mongoose')

const dogsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    description:{type:String, required:true},
    breed:{type:String,required:true}
})
const Dogs = mongoose.model('Dogs',dogsSchema)

module.exports = Dogs