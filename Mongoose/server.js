const express = require("express");
const mongoose = require("mongoose");
const app = express();

// 1️⃣ MongoDB Connection
async function connectionDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myfirstDb");
    console.log("✅ Db connected");
  } catch (err) {
    console.log("❌ Db error:", err);
  }
}

// 2️⃣ Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// 3️⃣ All Mongoose Operations
async function playWithUsers() {
  try {
    // ➕ Create
    const newUser = new User({
      name: "Nishant",
      email: "nishant@gmail.com",
      password: "12345",
    });
    await newUser.save();
    console.log("✅ User Created:", newUser);

    // 🔍 Find One (by condition)
    const userByName = await User.findOne({ name: "Nishant" });
    console.log("🔍 Found by name:", userByName);

    // 🔍 Find By ID
    const userById = await User.findById(newUser._id);
    console.log("🔍 Found by ID:", userById);

    // 📃 Find All
    const allUsers = await User.find();
    console.log("📃 All Users:", allUsers);

    // ✏️ Update
    await User.updateOne({ _id: newUser._id }, { $set: { password: "newPass" } });
    const updatedUser = await User.findById(newUser._id);
    console.log("✏️ Updated User:", updatedUser);

    // ❌ Delete
    await User.deleteOne({ _id: newUser._id });
    console.log("❌ User Deleted");

    const remainingUsers = await User.find();
    console.log("📃 Users After Deletion:", remainingUsers);

  } catch (err) {
    console.log("❌ Error:", err);
  }
}

// 4️⃣ Start
app.listen(3000, async () => {
  await connectionDb();
  await playWithUsers();
  console.log("🚀 Server connected at http://localhost:3000");
});
