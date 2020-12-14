//core
const path =require('path')
//third party
const express = require('express');
//local
const rootDir= require('../util/path')


const shopRouting = express.Router();


shopRouting.get('/',(req,res,next)=>{
   
    res.sendFile(path.join(rootDir,'views','shop.html'))

})

module.exports=shopRouting; 