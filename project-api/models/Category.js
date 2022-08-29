require("../config/database");

const mongoose = require("mongoose");

const Category = mongoose.Schema({
    name : String
    
    
})

module.exports = mongoose.model("category", Category);