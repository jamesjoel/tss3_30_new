const express = require("express");
const app = express();
const cors = require("cors");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors());

app.post("/api/login", (req, res)=>{
    if(req.body.username=="test@demo.com")
    {
        if(sha1(req.body.password)=="7110eda4d09e062aa5e4a390b0a572ac0d2c0220")
        {
            const token = jwt.sign({ id : 1, name : "rohit"}, "tss");
            res.send({ success : true})
        }else{

            res.send({ success : false, type : 2})
        }
    }
    else{
        res.send({ success : false, type : 1})
    }
})
app.get("/api/profile", (req, res)=>{
   
    var token = req.headers.authorization;
    jwt.verify(token, "tss", (err, obj)=>{
        if(err){
            // console.log("**************");
            res.send({ success : false });
        }else{
            res.send({ name : "rohit"});
            
        }
    })
})





app.listen(4000, ()=>{
    console.log("server running");
})