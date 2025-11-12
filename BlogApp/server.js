const express = require("express");
const app = express();

app.use(express.json());

const users = []; // ✅ define users array

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

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, password, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, password, email },
      { new: true } // returns updated document
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

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
});
