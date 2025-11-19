import { useState } from "react";
import { createBlog } from "./api";

export default function BlogForm({ onBlogCreated }) {
  const [blog, setBlog] = useState({ title: "", description: "", draft: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBlog({ ...blog, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog(blog);
      alert("Blog created!");
      setBlog({ title: "", description: "", draft: false });
      onBlogCreated(); // Refresh blogs
    } catch (err) {
      console.error(err);
      alert("Error creating blog");
    }
  };

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={blog.title} onChange={handleChange} /><br /><br />
        <textarea name="description" placeholder="Description" value={blog.description} onChange={handleChange} /><br /><br />
        <label>
          Draft: <input type="checkbox" name="draft" checked={blog.draft} onChange={handleChange} />
        </label><br /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
