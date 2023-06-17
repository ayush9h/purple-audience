const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const { Collection } = require("mongoose")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const {name,city,address,phone} = req.body

    const existingEntry = await collection.findOne({phone:phone})
    if (existingEntry) {
        return res.status(200).json({ message: "You are already here. Connect your friends." });
      }
    

    const data ={
        name:name,
        city:city,
        address:address,
        phone:phone,
    }
    await collection.insertMany([data])
    res.status(200).json({ message: "Thank You for Joining. We will contact you shortly." });

})

app.listen(3000,()=>{
    console.log("port connected")
})