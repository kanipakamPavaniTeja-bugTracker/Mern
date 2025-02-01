let express=require("express")
const { getdata, search, add } = require("../controller/userc")
let route=new express.Router()
route.get("/data",getdata)
route.get("/search/:id",search)
route.post("/add",add)
module.exports=route