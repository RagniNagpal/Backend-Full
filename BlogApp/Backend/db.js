const mongoose = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blogDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

    console.log("Database connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
}

module.exports = dbConnect;
