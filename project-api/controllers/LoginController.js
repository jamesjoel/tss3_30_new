const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");

const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    //console.log(req.body);
    var e = req.body.email; // rohit@gmail.com
    var p = sha1(req.body.password);

    User.find({ email : e }, (err, result)=>{
        if(result.length==1){
            if(result[0].password == p){

                const token = jwt.sign({ id : result[0]._id }, "tss");
                // console.log(token);

                res.send({ success : true, token : token });
            }else{
                res.send({ success : false, type : 2}) 

            }
        }
        else{
           res.send({ success : false, type : 1}) 
        }


        // if(result.length == 0){
        //     res.send({ success : false, type : 1})
        // }else{
        //     if(result[0].password == p){
        //         res.send({ success : true })
        //     }else{
        //         res.send({ success : false, type : 2})
        //     }
        // }









    })
})

module.exports = routes;
/*
City.find({ $or : { name : "ujjain", name : "Ujjain"}}, (err, result)=>{
    if(result.length==1){
        yes
    }
    else{
        no
    }
})





*/