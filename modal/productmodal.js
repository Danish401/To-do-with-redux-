const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    title:{
        required: true,
        type:String,
        
    },
    description:{
        required: true,
        type:String,
    },
    price:{
        required:true,
        type:Number,
    },
    image:{
        type:String,
    },
    




},{timestamps:true})
const Product=mongoose.model('Product', productSchema)

module.exports=Product