const mongoose=require("mongoose");

async function dbConnect(){
  try{
    await mongoose.connect("mongodb://localhost:27017/blogDb");
    console.log("db connected");
  }catch(err){
    console.log(err)
  }
}

module.exports=dbConnect;