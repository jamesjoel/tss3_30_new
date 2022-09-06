const routes = require("express").Router();
const path = require("path");
const Image = require("../models/Image");

routes.get("/upload", (req, res)=>{
    Image.find({}, (err, result)=>{
        var result2 = result.map((x)=>{
            let y = {
                _id : x._id,
                name : x.name,
                url : "http://localhost:3000/uploads/"+x.name
            }
            return y;
        })
        res.send(result2);
    })
})


routes.post("/upload", (req, res)=>{
    // console.log(req.files);
    var image = req.files.image;
    // console.log(image);
    var name = image.name;

    // console.log(path.resolve()+"/assets/uploads");
    image.mv(path.resolve()+"/assets/uploads/"+name, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        // console.log("success");
        
        Image.create({ name : name }, (err)=>{

            res.send({ succes : true, url : "http://localhost:3000/uploads/"+name });
        })
        
    });
})

module.exports = routes;