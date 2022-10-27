const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim:true
        },
        password: {
            type: String,
            required: true,
            trim:true
            
        }
    }
)


module.exports = mongoose.model("loginSchema", loginSchema)