const joi=require("@hapi/joi")

const joiLogin = joi.object({
    username: joi.string().required(),
    password:joi.string().min(4).required()
})

module.exports=joiLogin
