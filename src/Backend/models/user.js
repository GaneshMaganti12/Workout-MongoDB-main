const { strikethrough } = require('colors');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { required } = require('nodemon/lib/config');
// create a schema
// create a schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
       
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: 6
    },
    accounttype: {
        type: String,
        default: "nonprime"
    }



})


userSchema.pre('save', async function(next){
    

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)

})

userSchema.methods.getSignedJwtToken = function(){
    const token = jwt.sign({id: this._id, accounttype: this.accounttype}, "p@ssw0rd", {
        expiresIn: "1d"
    })

    return token;
}


userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}





// create model from schema
const users = mongoose.model('users', userSchema)

module.exports = users;