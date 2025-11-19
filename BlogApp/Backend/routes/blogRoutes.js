const express = require("express");
const { createBlog, getAllBlogs, deleteBlog } = require("../controllers/blogController");
const router = express.Router();

router.post("/", createBlog);
router.get("/", getAllBlogs);
router.delete("/:id", deleteBlog);

module.exports = router;
