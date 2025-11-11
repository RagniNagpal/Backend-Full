// async function fetchData() {
//   const res = await fetch("http://localhost:3000/", {
//     method: "POST",
//   });

//   const data = await res.text();
//   console.log("Response from server:", data);
// }

// fetchData();



const express=require("express");
const app=express();

app.get("/", function(req, res){
  // console.log("get req");
  res.status(404).send("get req");
});

app.post("/", function(req, res){
  res.send("post req");
});

app.put("/user", (req, res) => {
  res.send("put request");
});

app.patch("/", function(req, res){
  res.send("patch req");
});

app.delete("/del", function(req, res){
  res.send("delete req");
});

console.log("1");
app.listen(3000,()=>{
  console.log("server started");
})
console.log("2");
//pahele 1 phir 2 phir listen