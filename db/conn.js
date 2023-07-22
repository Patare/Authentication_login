
const mongoose = require("mongoose");

// const DB = "mongodb://0.0.0.0:27017/Authusers";
const DB = process.env.DATABASE
mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("database connect"))
  .catch((err) => {
    console.log(err);
  });
