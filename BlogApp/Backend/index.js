// const express=require("express");

// const app=express();

// app.use(express.json());

// const blogs=[];

// app.post("/blogs",(req,res)=>{
//   // console.log(req.body);
//   // blogs.push(req.body);
//   blogs.push({...req.body, id:blogs.length + 1})
//   return res.json({message : "blog created successfully"})
// })

// app.get("/blogs",(req,res)=>{
//   let publicBlogs=blogs.filter(blog=> !blogs.draft)
//   return res.json({publicBlogs});
// })

// app.get("/blogs/:id",(req,res)=>{
//   const {id}=req.params
//   let searchBlog=blogs.filter(blog=> blog.id==id)
//   return res.json({searchBlog});
// })

// app.patch("/blogs/:id",(req,res)=>{
//   const { id } = req.params
//    // let index = blogs.findIndex(blog => blog.id == id )
 
//     // blogs[index] = {...blogs[index] , ...req.body}
//   let updatedBlogs = blogs.map((blog, index) => blog.id == id ? ({ ...blogs[index], ...req.body }) : blog)

//     blogs = [...updatedBlogs]

//     return res.json({ message: "Blog updated successfully", updatedBlogs })


// })

// app.delete("/blogs/:id",(req,res)=>{
  
// })

// app.listen(3000,()=>{
//   console.log("server chal gya");
  
// })





// const express = require("express");
// const Blog = require("../models/Blog");
// const router = express.Router();

// // CREATE
// router.post("/", async (req, res) => {
//   try {
//     await Blog.create(req.body);
//     res.json({ message: "Blog created successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // READ ALL PUBLIC
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find({ draft: false });
//     res.json({ blogs });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // READ ONE
// router.get("/:id", async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) return res.json({ message: "Blog not found" });
//     res.json({ blog });
//   } catch (err) {
//     res.json({ message: "Invalid ID" });
//   }
// });

// // UPDATE
// router.patch("/:id", async (req, res) => {
//   try {
//     const updated = await Blog.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json({ message: "Blog updated", updated });
//   } catch (err) {
//     res.json({ message: "Update failed", error: err.message });
//   }
// });

// // DELETE
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Blog.findByIdAndDelete(req.params.id);
//     res.json({ message: "Blog deleted", deleted });
//   } catch (err) {
//     res.json({ message: "Delete failed", error: err.message });
//   }
// });

// module.exports = router;



//with controller, routes
const express = require("express");
const cors = require("cors");
const dbConnect = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());
app.use(express.json());


// Connect DB
dbConnect();

// Routes
const blogRoutes = require("./routes/blogRoutes");
app.use("/api/blogs", blogRoutes);

const userRoutesV1 = require("./routes/v1/userRoutes");
app.use("/api/v1", userRoutesV1);

app.listen(3000, () => console.log("Server running on port 3000"));
