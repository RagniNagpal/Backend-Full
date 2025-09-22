const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  const { name, password, email } = req.body;
  try {
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Please enter the name",
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Please enter the password",
      });
    }

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please enter the email",
      });
    }

    users.push(req.body);
    return res.status(200).json({
      success:true,
      message:"user added successfully"
    })
  
    
  } catch (err) {
    return res.status(500).json({
      success:false,
      message:"please try again"
    })
  }
});

app.get("/users",(req,res)=>{
  try{
    return res.status(200).json({
      success:true,
      message:"user fetched successfully"
    })
  }
  catch{
    return res.status(200).json({
      success:false,
      message:"please try again"
    })
  }
})

app.get("/users/:id", (req, res) => {
  try {
    const user=users.filter((user)=> user.id==req.params.id);

    if(user.length==0){
      return res.status(200).json({
      success: false,
      message: "user not found",
    });
    }

    return res.status(200).json({
      success: true,
      message: "user fetched successfully",
      data: user, 
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "please try again",
    });
  }
});

app.listen(3000, () => {
  console.log("server started");
});




// const express = require("express");
// const app = express();

// app.use(express.json());

// let users = [];

// // Add new user
// app.post("/users", (req, res) => {
//   const { name, password, email } = req.body;
//   try {
//     if (!name) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter the name",
//       });
//     }

//     if (!password) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter the password",
//       });
//     }

//     if (!email) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter the email",
//       });
//     }

//     const newUser = {
//       id: users.length + 1, // auto id generate
//       name,
//       password,
//       email,
//     };

//     users.push(newUser);
//     return res.status(200).json({
//       success: true,
//       message: "user added successfully",
//       data: newUser,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: "please try again",
//     });
//   }
// });

// // Get all users
// app.get("/users", (req, res) => {
//   try {
//     return res.status(200).json({
//       success: true,
//       message: "users fetched successfully",
//       data: users,
//     });
//   } catch {
//     return res.status(500).json({
//       success: false,
//       message: "please try again",
//     });
//   }
// });

// // Get user by id
// app.get("/users/:id", (req, res) => {
//   try {
//     const user = users.find((u) => u.id == req.params.id);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "user not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "user fetched successfully",
//       data: user,
//     });
//   } catch {
//     return res.status(500).json({
//       success: false,
//       message: "please try again",
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log("server started");
// });
