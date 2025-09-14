const express = require("express");
const { request } = require("http");
const app = express();
const path=require("path");
const fs = require("fs");

// //app.METHOD(path,handler)
// console.log(__dirn
// ame + "index.html");
// console.log(path.join(__dirname, "index.html"));

//2nd thing
function dynamicData(req,res,route){
  fs.readFile(__dirname + "/index.html", {encoding : "utf-8"} , (err,data)=>{
    if(err){
      throw new Error("Not found");
    }
    else{
      data=data.replace("[path]",route=="" ? "Code thread" :route);
      res.send(data);
    }
  })
}

app.get(["/", "/about"], (req, res) => {
  dynamicData(req, res, req.path); // route ke hisaab se dynamic
});



//dynamic data taaki baar baar change na karna padhe route
// function dynamicData(req,res,route){
//   res.sendFile(__dirname + "/index.html");
// }
app.get("/", (req, res) => {
  // console.log("hello");
  // res.json({ message: "hello jii" });
  // res.sendFile(__dirname + "/index.html");

  dynamicData(req, res, "");
});

app.get("/about", (req, res) => {
  // console.log("hello");
  // res.json({ message: "hello jii" });
  // res.sendFile(__dirname + "/index.html");
  dynamicData(req, res, "/about");
});

app.post("/", (req, res) => {
  res.send("heloooooooooooooooo");
});

app.put("/user", (req, res) => {
  res.send("put request");
});

app.delete("/del", (req, res) => {
  res.send("delete request");
});

app.listen(3000, () => {
  console.log("Chal gya server");
});
