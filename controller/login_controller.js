const jwt = require("jsonwebtoken")
const joiLogin = require("../schema/joi_login")
const loginSchema = require("../schema/login_schema")
const bcrypt = require("bcryptjs")
require("dotenv").config()

const getlogin = async (req, res) => {
    try {
        const user = await loginSchema.find({});
        res.json(user)
    }
    catch (err) {
        console.log(err)
    }
    
}

const postlogin = async (req, res) => {
    const {username, password}= req.body
    try {
        const { error } = joiLogin.validate(req.body)
        if (error) {
            return res.json(error.details[0].message)
        }
        const user = await loginSchema.findOne({ username: username })
        if (!user) {
            return res.json("no user found")
        }
    
        const authenticated = bcrypt.compare(password, user.password);
        if (!authenticated) {
            return res.json("password incorrect")
        }
        const token = jwt.sign({_id:user._id}, process.env.TOKEN_STRING)
        res.header("auth-token", token).send(token)
        
    }
    catch (err) {
        console.log(err)
    }
    
}

module.exports={getlogin,postlogin}