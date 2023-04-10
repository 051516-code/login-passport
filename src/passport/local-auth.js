const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require('../models/user') //TODO : imortamos el modelo de usuario para manejar el






//TODO: utilizamos passport para auntenticar el usuario 

passport.use('local-signup', new LocalStrategy({
    usernameField:'email',
    passwordField: 'password',   // } TODO : aqui defino los datos a validar
    passReqToCallback: true
}, async (req, email, password, done) =>{
   const user =  new User();
   user.email = email;
   user.password = password;     //TODO : este bloque autentica el usuario y lo conecta con el modelo de base de datos
   await user.save();

   done(null, user)
}))