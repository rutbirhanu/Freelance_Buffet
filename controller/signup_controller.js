const joiSignUp = require("../schema/joi_signup")
const signUpSchema = require("../schema/signup_schema")
const bcryptjs = require("bcryptjs")
const e = require("express")


const getsignup = async (req, res) => {
    try {
        const stud = await signUpSchema.find({})
        res.json(stud)
    }
    catch (err) {
        res.status(500).json({error:err})
    }
}

const postsignup = async (req, res) => {
    const { password, email } = req.body
    try {
        const { error } = joiSignUp.validate(req.body)
        const user = await signUpSchema.findOne({ email: email })
            if (user) {
                return res.status(400).json("email already in use")
            }
        if (error) {
            return res.json(error.details[0].message)
        }

        const salt = await bcryptjs.genSalt(10)
        const hashed = await bcryptjs.hash(password, salt)

        const signed = await signUpSchema.create({ ...req.body, password: hashed })
        res.json(signed)
    }

    catch (err) {
        res.status(500).json({error:err})
        
    }



}

module.exports = { getsignup, postsignup }