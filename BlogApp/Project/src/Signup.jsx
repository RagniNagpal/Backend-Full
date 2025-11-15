import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = await response.json();
      alert(result.message);

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        /><br /><br />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        /><br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
