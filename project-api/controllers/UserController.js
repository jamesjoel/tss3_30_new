const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    delete req.body.re_password;

    req.body.password = sha1(req.body.password);

    User.create(req.body, ()=>{
        res.send({ success : true });
    })
})

routes.get("/profile", (req, res)=>{
    // console.log(req.headers.authorization);
    var token = req.headers.authorization;
    jwt.verify(token, "tss", (err, obj)=>{
        if(err){
            // console.log("**************");
            res.send({ success : false });
        }else{
            var id = obj.id;
            User.find({ _id : id }, (err, result)=>{
                res.send(result);
            })
        }
    })
    
    
})

module.exports = routes;