const mongoose=require("mongoose")

const CategorySchema=new mongoose.Schema({
category_name:{
    type:String,
    required:True
}},{timestamps:True})

module.exports=mongoose.model("Category",CategorySchema)