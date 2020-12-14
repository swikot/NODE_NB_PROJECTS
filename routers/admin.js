//core
const path =require('path')
//third party
const express = require('express');
//local
const rootDir= require('../util/path')


const adminRouting=express.Router()
adminRouting.get('/addproduct',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addProduct.html'));

})
adminRouting.post('/addproduct',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')

})

module.exports=adminRouting