const mongoose = require("mongoose")

const signUpSchema = new mongoose.Schema(
    {
           username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true

        },
        address: {
            type: String,
            defalult:""
        },
        type: {
            type: String,
            defalut:"user"
        }
    }
    )
    

module.exports = mongoose.model("signUpSchema", signUpSchema)

