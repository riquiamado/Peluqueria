const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

module.exports = mongoose.connect(process.env.URL);
console.log("Connected to the world");

 