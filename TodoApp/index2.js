

//retrieve json data 
async function addTodo(){
  let res = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "from frontend",
      description: "desc"
    })
  });

  let json = await res.json();
  console.log(json);
}

addTodo();
