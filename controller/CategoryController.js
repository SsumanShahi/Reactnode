const Category=require('../model/CategoryModel')

exports.addtocategory=async(req,res)=>{
    let categoryadd=new Category({
        category_name:req.body.category_name
    })
}
categorytoadd=await categoryadd.save() 
if(!categorytoadd){
    return res.status(400).json({error:"Couldnot add category"}) 
}
res.send(categorytoadd)

// req.body
// req.params
// req.query