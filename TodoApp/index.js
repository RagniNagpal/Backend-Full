const express=require("express")
const app=express();


app.use(express.json());

// let todos=[{
//   title:"todos 1",
//   desc:"desc 1",
//   isCompleted:false
// },{
//   title:"todos 2",
//   desc:"desc 2",
//   isCompleted:true
// },{
//   title:"todos 2",
//   desc:"desc 2",
//   isCompleted:true
// }]

let todos=[];
app.post("/todos",(req,res)=>{
  try{
    // console.log(req.body)
    const {title,description}=req.body;
// todos.push(req.body)
todos.push({...req.body, isChecked:false , id:todos.length+1})
return res.status(200).json({"message":"Todo added/created success"})
    // // or
    // const title=req.body.title;
    // const description=req.body.description;
  }catch(err){
    return res.status(500).json({"message":"please try again"});

    }
})

app.get("/todos",(req,res)=>{
  try{
    return res.status(200).json({todos})
  }catch(err){
    return res.status(500).json({"message":"please try again"});
  }
  //keys mei value same hai nhi to ({todos:todos})
  return res.status(200).json({todos})
})

app.put("/todos/:id",(req,res)=>{
  // console.log(req.body);
  try{
    const index=todos.findIndex(todos=> todo.id==req.params.id)
    todos[index]={...todos[index],...req.body};
      console.log(index);
    
return res.status(200).json({"message":"updated"})
  }
  catch(err){
    return res.status(500).json({"message":"try again"})
  }
})

app.delete("/todos/:id",(req,res)=>{
  // console.log(req.body);
  try{
    // const id=Number(req.params.id) +1 ;
    // console.log(id)
// console.log(Number(req.params.id) + 1);
todos.splice(Number(req.params.id) - 1,1)

//or

// const filteredTodo=todos.filter(todos=> todo.id!=req.params.id)
// console.log(filteredTodo)
return res.status(200).json({"message":"deleeted"})
  }
  catch(err){
    return res.status(500).json({"message":"try again"})
  }
})

app.get("/",(req,res)=>{
  return res.status(200).json({
    "message":"kya haal hai bhai ke"
  })
})

app.listen(3000,()=>{
  console.log("server started");
})