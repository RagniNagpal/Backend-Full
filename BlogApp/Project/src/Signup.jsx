import { useState } from "react";
import { signupUser } from "./api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(form);
      alert(res.data.message || "User created!");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      alert("Error creating user");
    }
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} /><br /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
