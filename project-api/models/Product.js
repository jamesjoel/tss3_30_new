require("../config/database");

const mongoose = require("mongoose");

const Product = mongoose.Schema({
    name : String,
    price : Number,
    discount : Number, 
    description : String,
    category : String,
    image : String
    
})

module.exports = mongoose.model("product", Product);