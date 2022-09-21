require("../config/database");

const mongoose = require("mongoose");

const User = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    gender : String,
    city : String,
    address : String,
    contact : String,
    createAt : Date
})

module.exports = mongoose.model("user", User);