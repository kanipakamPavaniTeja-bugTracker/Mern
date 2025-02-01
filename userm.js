let mongoose=require("mongoose")
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "place":String,
    "phno":String,
    "dob":Date,
    "gender":String
})
let um=mongoose.model("user",usersch)
module.exports=um