const express = require("express");
const app = express();

app.use(express.json());

// Query params: http://localhost:4000/blogs?author=ram
app.get("/blogs", (req, res) => {
  res.send(req.query);
});

// Show request headers
app.get("/headers", (req, res) => {
  console.log(req.headers);      // terminal me print hoga
  res.json(req.headers);         // browser/postman me dikhayega
});

// POST body
app.post("/blogs", (req, res) => {
  console.log(req.body);         // terminal me body
  res.json(req.body);            // response me body
});

// PUT with params
app.put("/blogs/:id", (req, res) => {
  console.log("Headers:", req.headers);   // terminal me headers
  console.log("Params:", req.params);     // id value terminal me
  
  // Agar header 'name' hai aur valid JSON hai
  if (req.headers.name) {
    try {
      const parsed = JSON.parse(req.headers.name);
      console.log("Parsed Name Header:", parsed);
    } catch (err) {
      console.log("Invalid JSON in name header:", req.headers.name);
    }
  }

  // Browser/Postman ko response
  res.json({
    params: req.params,
    headers: req.headers
  });
});

// DELETE
app.delete("/deleteBlogs", (req, res) => {
  console.log("Delete request received");
  res.send("Blog deleted");
});

// Duplicate headers route hata diya (upar wala hi rakha hai)

app.listen(4000, () => {
  console.log("server started on http://localhost:4000");
});
