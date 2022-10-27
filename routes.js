const express = require("express")
const router = express.Router()
const { getsignup, postsignup } = require("./controller/signup_controller")
const { getlogin, postlogin } = require("./controller/login_controller")

router.route("/signup").get(getsignup).post(postsignup)
router.route("/login").get(getlogin).post(postlogin)

module.exports = router

