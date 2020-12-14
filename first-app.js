//core imports
const path =require('path');

// Third Party imports
const express    =require('express');
const bodyParser =require('body-parser');

// local imports 
const shopRouting=require('./routers/shop');
const adminRouting=require('./routers/admin');
const rootDir= require('./util/path')

//express
const app = express();
//  middleware
app.use(bodyParser.urlencoded({ extended: false })) //Parsig form data
app.use(express.static(path.join(rootDir,'public')))//serving static files
//serving routers 
app.use('/admin',adminRouting)
app.use(shopRouting) 
// error page 
app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(rootDir,'views','404.html'));

})
//start from here 
app.listen(3000)
//finish

