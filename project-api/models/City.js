require("../config/database");
const mongoose = require("mongoose");
const City = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, { collection : "city"});

module.exports = mongoose.model("city", City);