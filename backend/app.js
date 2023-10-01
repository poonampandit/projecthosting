const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const cors=require('cors')
const model=require('./db.js')
app.use(bodyparser.json())
app.use(cors())


app.get("/",(req,res)=> //get api
{

    // res.send("welcome to backend server")

   model.find().then(p=>res.send(p)).catch(err=>console.log(err))

})


app.post("/",(req,res)=> //api post
    {
          const data=new model({
      "username":req.body.username,
     "password":req.body.password
     
        })
 data.save().then(p=>res.send({"message":"data saved"})).catch(err=>console.log(err))
    
    })



app.listen(3021,(err)=>{if(!err){console.log("server on")}})