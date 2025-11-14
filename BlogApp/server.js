const express = require("express");
const mongoose=require("mongoose");
const app = express();

app.use(express.json());
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
async function dbConnect(){
  try{
    await mongoose.connect("mongodb://localhost:27017/blogDb");
    console.log("Db connected successfully");
  }catch(error){
    console.log("error");
    console.log(error)
  }
}

const users = []; 

app.post("/users", (req, res) => {
  const { name, password, email } = req.body;

  try {
    if (!name || !password || !email) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields"
      });
    }

    users.push({...req.body,id:users.length + 1}); 

    return res.status(200).json({
      success: true,
      message: "User created successfully"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message
    });
  }
});
app.get("/users",(req,res)=>{
  try{
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data:users
    });
    
  }catch(err){
    return res.status(200).json({
      success:false,
      message:"Please try again",
    })
  }
})

app.get("/users/:id",(req,res)=>{
  try{
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
    return res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data:user
    });
  }catch(err){
    return res.status(200).json({
      success:false,
      message:"Please try again",
    })
  }
})

app.patch("/users/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    users[userIndex] = { ...users[userIndex], ...req.body };

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: users[userIndex],
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});


app.delete("/users/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const deletedUser = users.splice(userIndex, 1);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});



app.listen(3000, () => {
  console.log("Server started on port 3000");
  dbConnect()
});
