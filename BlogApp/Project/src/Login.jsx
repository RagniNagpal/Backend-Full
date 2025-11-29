import { useState } from "react";
import { loginUser } from "./api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      alert(res.data.message || "Login successful!");
      setForm({ email: "", password: "" });
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Error logging in");
    }
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
