const mongoose = require('mongoose')
const Schema = mongoose.Schema

function emailValidation(email){
    const regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return reqex.test(email)
}

var userSchema = new Schema({
    name:{
        type: String,
        required: [true,'your name must be filled']
    },
    email : {
        type: String,
        lowercase : true,
        unique: [true,'Email address is already used'],
        required: [true,'you email must be filled'],
        validate: [emailValidation,'your email format is not valid']
    },
    picture:{
        type:String
    },
    timestamps: true
})

module.exports = mongoose.model('users',userSchema)