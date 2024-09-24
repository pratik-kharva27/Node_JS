const express = require("express")
const user = require("./MOCK_DATA.json")
const app = express()
const port = 8000


//routes
app.get("/users",(req,res)=>{
  const html =`
  <ul>
    ${user.map( (user) =>`<li>${user.id} ${user.first_name}</li>`).join("")}
  </ul>`;  
return res.send(html); 
});


//Rest Api

app.get("/api/users",(req,res)=>{
  return res.send(user);
});    


// app.get("/api/users/:userid",(req, res)=>{
//   const myid = Number(req.params.userid);
//   const users = user.find(user => user.id === myid);
//   return res.json(users);
// })

app.route("/api/users/:userid")
.get((req,res)=>{
  const id = Number(req.params.userid);
  const result = user.find(user =>user.id === id);
  return res.json(result);
})
.patch((req,res)=>{
  //edit request 
  return res.json({status:"pending"});
})
.delete((req,res)=>{
  //delete request 
  return res.json({status:"deleted"});
});


app.listen(port,()=>{
 console.log(`server run on ${port}`);
})