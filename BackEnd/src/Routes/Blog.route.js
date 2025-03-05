const express = require("express");
const router = express.Router();
const blogcontroller = require("../controller/blogcontroller");
const {auth} = require("../middleware/Auth");

router.post("/create", auth, blogcontroller.createPost);
router.get("/getAll", auth, blogcontroller.GetAllPost);
router.put("/update/:id", auth, blogcontroller.UpdatePost);
router.delete("/delete/:id", auth, blogcontroller.deletePost);

module.exports = router;
