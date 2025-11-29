import { useEffect, useState } from "react";
import { getAllBlogs, deleteBlog } from "./api";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await getAllBlogs();
      console.log("Fetched blogs:", res.data.blogs);
      setBlogs(res.data.blogs);
    } catch (err) {
      console.error("Error fetching blogs:", err.response || err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      alert("Blog deleted!");
      fetchBlogs(); // Refresh list
    } catch (err) {
      console.error("Error deleting blog:", err.response || err);
      alert("Error deleting blog");
    }
  };

  return (
    <div style={{ width: "600px", margin: "20px auto" }}>
      <h2>All Blogs</h2>
      {blogs.length === 0 && <p>No blogs found.</p>}
      {blogs.map((b) => (
        <div
          key={b._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{b.title}</h3>
          <p>{b.description}</p>
          <p>{b.draft ? "Draft" : "Published"}</p>
          <button onClick={() => handleDelete(b._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
