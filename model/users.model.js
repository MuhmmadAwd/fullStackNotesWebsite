const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    password:String,
    email:String
})

module.exports = mongoose.model("user",userSchema)