const mongoose = require("mongoose")
require("dotenv").config()
console.log(1);
exports.connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Yeahh MongoDb Connected");
    } catch (error) {
        console.log(error)
    }
}