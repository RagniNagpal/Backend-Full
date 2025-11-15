// const express = require("express");
// const mongoose=require("mongoose");
// const app = express();

// app.use(express.json());
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type:String,
//     unique:true,
//   },
//   password: String
// });

// module.exports = mongoose.model("User", userSchema);
// async function dbConnect(){
//   try{
//     await mongoose.connect("mongodb://localhost:27017/blogDb");
//     console.log("Db connected successfully");
//   }catch(error){
//     console.log("error");
//     console.log(error)
//   }
// }

// // const users = []; 

// app.post("/users", (req, res) => {
//   const { name, password, email } = req.body;

//   try {
//     if (!name || !password || !email) {
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all the fields"
//       });
//     }

//     users.push({...req.body,id:users.length + 1}); 

//     return res.status(200).json({
//       success: true,
//       message: "User created successfully"
//     });

//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: err.message
//     });
//   }
// });
// app.get("/users",(req,res)=>{
//   try{
//     return res.status(200).json({
//       success: true,
//       message: "User fetched successfully",
//       data:users
//     });
    
//   }catch(err){
//     return res.status(200).json({
//       success:false,
//       message:"Please try again",
//     })
//   }
// })

// app.get("/users/:id",(req,res)=>{
//   try{
//     const id = parseInt(req.params.id);
//     const user = users.find(user => user.id === id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found"
//       });
//     }
//     return res.status(200).json({
//       success: true,
//       message: "User fetched successfully",
//       data:user
//     });
//   }catch(err){
//     return res.status(200).json({
//       success:false,
//       message:"Please try again",
//     })
//   }
// })

// app.patch("/users/:id", (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const userIndex = users.findIndex(u => u.id === id);

//     if (userIndex === -1) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found"
//       });
//     }

//     users[userIndex] = { ...users[userIndex], ...req.body };

//     return res.status(200).json({
//       success: true,
//       message: "User updated successfully",
//       data: users[userIndex],
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: err.message,
//     });
//   }
// });


// app.delete("/users/:id", (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const userIndex = users.findIndex(u => u.id === id);

//     if (userIndex === -1) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     const deletedUser = users.splice(userIndex, 1);

//     return res.status(200).json({
//       success: true,
//       message: "User deleted successfully",
//       data: deletedUser,
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: err.message,
//     });
//   }
// });



// app.listen(3000, () => {
//   console.log("Server started on port 3000");
//   dbConnect()
// });


//this is withs schema
// const express = require("express");
// const cors = require("cors");
// const dbConnect = require("./DB/db");
// const User = require("./Model/userModel");



// const app = express();
// app.use(express.json());
// app.use(cors());

// dbConnect();

// // CREATE user
// app.post("/users", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//       console.log("User Created :", user);
//     return res.json({
//       success: true,
//       message: "User created successfully",
//       data: user,
//     });
    
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });

// // READ all users
// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   return res.json({
//     success: true,
//     data: users,
//   });
// });

// // READ one
// app.get("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user)
//       return res.json({ success: false, message: "User not found" });

//     return res.json({ success: true, data: user });
//   } catch {
//     return res.json({ success: false, message: "Invalid ID" });
//   }
// });

// // UPDATE user
// app.patch("/users/:id", async (req, res) => {
//   try {
//     const updated = await User.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!updated)
//       return res.json({ success: false, message: "User not found" });

//     return res.json({
//       success: true,
//       message: "Updated",
//       data: updated,
//     });
//   } catch {
//     return res.json({ success: false, message: "Invalid ID" });
//   }
// });

// // DELETE user
// app.delete("/users/:id", async (req, res) => {
//   try {
//     const deleted = await User.findByIdAndDelete(req.params.id);

//     if (!deleted)
//       return res.json({ success: false, message: "User not found" });

//     return res.json({
//       success: true,
//       message: "Deleted",
//       data: deleted,
//     });
//   } catch {
//     return res.json({ success: false, message: "Invalid ID" });
//   }
// });

// app.listen(3000, () => console.log("Server running on port 3000"));



//api versioning
const express = require("express");
const app = express();

app.use(express.json());

// Version 1 routes
//POST http://localhost:3000/api/v1/users

app.use("/api/v1", require("./routes/v1/userRoutes"));

// Version 2 routes
app.use("/api/v2", require("./routes/v2/userRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));
