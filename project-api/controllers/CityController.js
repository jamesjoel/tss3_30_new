const routes = require("express").Router();
const City = require("../models/City");
// localhost:3000/api/city/pages/5/100
// localhost:3000/api/city/pages/1/100
routes.get("/pages/:pagenumber/:totalrec", (req, res)=>{
    
    var pagenum = req.params.pagenumber;
    var totalrec = req.params.totalrec;
    var skip = (pagenum-1)*totalrec;

    City.find().skip(skip).limit(totalrec).exec((err, result)=>{
        res.send(result);
    })
    
})
routes.get("/total_record", (req, res)=>{
    City.count((err, result)=>{
        res.send({ total : result});
    })
})



module.exports = routes;