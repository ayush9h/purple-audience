const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ayushkumarlfs2:4QbplpUaQMHuYKaV@cluster0.upavfik.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{
    console.log("Successfully connected to MongoDB Server")
})
.catch(()=>{
    console.log("Failed to connect to MongoDB Server")
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
        unique:true,
    }

})

const collection = mongoose.model("collection",newSchema)
module.exports = collection; 

