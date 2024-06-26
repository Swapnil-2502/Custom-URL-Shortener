const mongoose = require("mongoose");

const urlusersSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role: {
        type: String,
        required: true,
        default: "NORMAL"
    },
    password:{
        type:String,
        required:true

    }

},{timestamps:true})

const urlUSERS = mongoose.model("urlusers",urlusersSchema);

module.exports = urlUSERS;