const Product=require('../modal/productmodal')
const addProduct=async(req,res)=>{
    try {
        const {title,description,price}=req.body
        if(!title||!description||!price){
            return res.status(400).json({msg:'Please fill all fields'})
        }
        if(!req.file){
            return res.status(400).json({msg:'Please upload an image'})
        }
        const product= await Product.create({
            title,
            description,
            price,
            image:req.file.path
        })
        res.json({msg:'Product added successfully',product})
        
    } catch (error) {
        console.error(error)
        
    }


}

module.exports={addProduct}