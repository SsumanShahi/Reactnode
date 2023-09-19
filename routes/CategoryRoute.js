const express=require("express")
const { addtocategory } = require("../controller/CategoryController")
const router=express.Router()

router.post('./addcategory',addtocategory)