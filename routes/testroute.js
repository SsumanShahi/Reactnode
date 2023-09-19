const express=require("express")
const { testfunction } = require("../controller/testfunction")
const router=express()


router.get("/hello",testfunction)

module.exports=router