const Blog = require("../models/Blog");

// --------------------
// Create Blog
// --------------------
exports.createBlog = async (req, res) => {
  try {
    console.log("Blog body received:", req.body);

    // Create the blog
    const blog = await Blog.create(req.body);

    console.log("Blog saved:", blog);
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// --------------------
// Get All Blogs
// --------------------
exports.getAllBlogs = async (req, res) => {
  try {
    // Show all blogs for debugging
    const blogs = await Blog.find({}); // Remove draft filter for testing

    console.log("Fetched blogs:", blogs.length);
    res.json({ success: true, blogs });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// --------------------
// Delete Blog by ID
// --------------------
exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    console.log("Deleted blog:", deletedBlog._id);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Error deleting blog:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};
