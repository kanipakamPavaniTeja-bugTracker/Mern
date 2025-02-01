const um = require("../model/userm")

let add=async(req,res)=>{
    try{
        let data=new um(req.body)
        await data.save()
        res.send("data added")
    }
    catch(err){
        res.send("error in storing")
    }
}
let getdata=async(req,res)=>{
    try{
        let data=await um.find()
        res.json(data)
    }
    catch(err){
        res.send("error in fetching data")
    }
}
let search=async(req,res)=>{
    try{
        let data=await um.findById({"_id":req.params.id})
        res.json(data)
    }
    catch(err){
        res.send("error in search")
    }
}
module.exports={add,getdata,search}