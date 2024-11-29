 const express = require('express');
 const Auth= require('../middleware/Authmiddleware');
const upload = require('../middleware/multermiddleware');
const {addProduct} = require('../controllers/productcontroller');
 const router=express.Router()
 router.post("/add",upload.single('image'),addProduct)
 module.exports=router