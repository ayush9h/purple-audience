const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const {name} = req.body
    const {city} = req.body
    const {address} = req.body
    const {phone} = req.body

    const data ={
        name:name,
        city:city,
        address:address,
        phone:phone,
    }
    await collection.insertMany([data])
})

app.listen(3000,()=>{
    console.log("port connected")
})