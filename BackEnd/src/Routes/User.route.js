const express = require("express")
const router = express.Router()
const usercontroller = require("../controller/usercontroller")

router.post("/Signup",usercontroller.signup)
router.post("/Login",usercontroller.login)

module.exports = router