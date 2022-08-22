const routes = require("express").Router();
const MongoClient = require("mongodb").MongoClient;

routes.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss5_30");
        db.collection("city").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

module.exports = routes;