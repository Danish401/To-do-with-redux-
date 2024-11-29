const mongoose=require('mongoose')
const DB=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/ecom")
        console.log("Database connected successfully")
    } catch (err) {
        console.error("Failed to connect to database",err)
        process.exit(1)
    }
}
module.exports=DB