const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan')


// Initializers
const app = express();  // TODO: init express
require('./database');  // TODO: init database

//Settings
app.set('views',path.join(__dirname, "views"));  // TODO : find the file views using path and dirname
app.engine('ejs', engine);                      // TODO : config the templates
app.set('view engine', 'ejs');                  // TODO : set the templates 
app.set('port', process.env.PORT || 3000);      //TODO :  define the port


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extends: false}));

//Routes
app.use('/', require('./routes/index'));  

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`*** SERVER ON PORT : `, app.get('port'))
})