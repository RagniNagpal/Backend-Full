const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ draft: false });
    res.json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
