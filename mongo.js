const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("fail")
})

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }

})

const collection = mongoose.model("collection",newSchema)
module.exports = collection; 