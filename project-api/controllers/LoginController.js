const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");

routes.post("/", (req, res)=>{
    //console.log(req.body);
    var e = req.body.email;
    var p = sha1(req.body.password);

    User.find({ email : e }, (err, result)=>{
        if(result.length == 0){
            res.send({ success : false, type : 1})
        }else{
            if(result[0].password == p){
                res.send({ success : true })
            }else{
                res.send({ success : false, type : 2})
            }
        }
    })
})

module.exports = routes;