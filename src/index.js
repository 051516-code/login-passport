const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');


// Initializers
const app = express();  // TODO: init express
require('./database');  // TODO: init database
require('./passport/local-auth'); //TODO: para usar passport

//Settings
app.set('views',path.join(__dirname, "views"));  // TODO : find the file views using path and dirname
app.engine('ejs', engine);                      // TODO : config the templates
app.set('view engine', 'ejs');                  // TODO : set the templates 
app.set('port', process.env.PORT || 3000);      //TODO :  define the port


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extends: false}));
app.use(session(
    {
        secret: "mysecretsession",
        resave: false,
        saveUninitialized:false
    }
));

app.use(flash());   // TODO: para mensaje entre vistas
app.use(passport.initialize());
app.use(passport.session())


//TODO: variable global que muestra el mensage
app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    // console.log(app.locals)
    next();
  });
//Routes
app.use('/', require('./routes/index'));  

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`*** SERVER ON PORT : `, app.get('port'))
})