const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const Schema = mongoose.Schema

const todoSchema = new Schema({
    UserId:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    body:{
        type:String,
        required : [true,'You Must Fill a todo']
    },
    status:{
        type:String
    },
    timestamps:true
})

module.exports = mongoose.model('todos',todoSchema)