const mongoose = require("mongoose")

const connectDB = (uri) => {
    console.log("Connecting to Mongodb server...");
    return mongoose.connect(uri);
};

module.exports = connectDB;