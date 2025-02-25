const mongoose = require("mongoose");

const db = async()=>{
  await mongoose.connect("mongodb+srv://dharmesh:12345@cluster0.6rcds.mongodb.net/blog-project");
  console.log("Database is Connected");
}

module.exports = db;