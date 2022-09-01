require("../config/database");

const mongoose = require("mongoose");

const Hello = mongoose.Schema({
    name : String,
    price : Number,
    discount : Number, 
    description : String,
    category : String
    
})

module.exports = mongoose.model("hello", Hello);