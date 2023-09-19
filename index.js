const express=require("express")
const app=express()
require('dotenv').config()
const testroute=require('./routes/testroute')
require('./database/connection')

port=process.env.PORT || 3001

app.listen(port,()=>{
    console.log("Server Started")
})
app.use(testroute)


console.log("hello")