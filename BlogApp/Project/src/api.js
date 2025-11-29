import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Users
export const signupUser = (data) => API.post("/v1/users", data);
// Login
export const loginUser = (data) => API.post("/v1/login", data);


// Blogs
export const createBlog = (data) => API.post("/blogs", data);
export const getAllBlogs = () => API.get("/blogs");
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
