const routes = require("express").Router();
const Category = require("../models/Category");

routes.post("/", (req, res)=>{
    Category.create(req.body, (err, result)=>{
        res.send(result);
    })
})
routes.get("/", (req, res)=>{
    Category.find({}, (err, result)=>{
        res.send(result);
    })
})
routes.get("/:id", (req, res)=>{
    var id = req.params.id;
    Category.find({_id : id}, (err, result)=>{
        res.send(result);
    })
})
routes.delete("/:id", (req, res)=>{
    var id = req.params.id;
    Category.deleteOne({ _id : id }, (err)=>{
        res.send({ success : true });
    })
})
routes.put("/:id", (req, res)=>{
    var id = req.params.id;
    Category.updateOne({_id : id}, req.body, (err)=>{
        res.send({ success : true });
    })
})



module.exports = routes;