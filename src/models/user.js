const { Schema, default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


//TODO :  crea el Schema para la DB
const userSchema  = new Schema({
    email: String,
    password: String
});


//TODO:  cifrado de contrasena
userSchema.methods.encyptPassword = () => {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}


//TODO: compara si es valida la contrasena
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
} 


module.exports = mongoose.model('users', userSchema)