//Connection link : mongodb://localhost:27017/MusicSystem.UserData
const mongoose = require("mongoose");
const mongoURL =  "mongodb://localhost:27017/MusicSystem";
const connectToMongo = () =>{
    mongoose.connect(mongoURL)
    console.log("Connedted to MongoDB")
}
module.exports = connectToMongo;