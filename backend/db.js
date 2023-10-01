const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/rohitabc').then(p=>console.log("successfully connected")).catch
(err=>console.log(err))

const schema= mongoose.Schema({

    "username":String,
    "password":String
    
    
     })
const model=mongoose.model('table1',schema)
module.exports=model