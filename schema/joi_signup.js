const joi = require("@hapi/joi")

const joiSignUp = joi.object({
    username: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().min(4).required(),
    address: joi.string().default(""),
    type:joi.string().default("user")
})


module.exports = joiSignUp