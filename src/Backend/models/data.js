const { strikethrough } = require('colors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    heading: {
        type:String,
        unique:true
    },
    imageurl: {
        type:String
    },
    discriptionforcard:{
        type:String
    },
    fulldiscription:{
        type:String
    },
    Calorieburnperhour:{
        type:Number
    },
    videourl:{
        type:String,
        required:true
    },
    category:{
        type:String
    }


})


// create model from schema
const workouts = mongoose.model('workouts', workoutsSchema)

module.exports = workouts;