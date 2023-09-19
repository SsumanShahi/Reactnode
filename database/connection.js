const mongoose=require("mongoose")


mongoose.connect(process.env.DATABASE)
    .then(()=>{
        console.log("Database Successfully Connected")
    })
    .catch((err)=>{
        console.log("not connected")
    })
