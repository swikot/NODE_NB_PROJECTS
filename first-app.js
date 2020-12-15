const port = 3000
//core imports
const path =require('path');

// Third Party imports
const express    =require('express');
const bodyParser =require('body-parser');
const exphbs =require('express-handlebars');

// local imports 
const shopRouting=require('./routers/shop');
const adminData=require('./routers/admin');
const rootDir= require('./util/path')
//express
const app = express();
//setting up template engine 
app.engine('hbs', exphbs({ defaultLayout: null}));
app.set('view engine','hbs')
app.set('views','views')
//  middleware
app.use(bodyParser.urlencoded({ extended: false })) //Parsig form data
app.use(express.static(path.join(rootDir,'public')))//serving static files
//serving routers 
app.use('/admin',adminData)
app.use(shopRouting) 
// error page 
app.use((req,res,next)=>{
   res.status(404).render('404',{pageTitle:'Page Not Found'});

})
//start from here 
app.listen(port, () => console.log(`App listening to port ${port}`));
//finish_port_many


