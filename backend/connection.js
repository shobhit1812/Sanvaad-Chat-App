const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.ergpkid.mongodb.net/FullStackCHAT?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb")
  }
)
