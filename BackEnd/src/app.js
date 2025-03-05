const express = require("express");
const app = express();
const userroute = require("./Routes/User.route");
const blogroute = require("./Routes/Blog.route");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userroute);
app.use("/blog", blogroute);

module.exports = app;
