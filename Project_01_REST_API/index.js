const express = require("express")
const user = require("./MOCK_DATA.json")
const fs = require("fs")
const app = express()
const port = 8000


//midddleware - plugin 
app.use(express.urlencoded({extended:false}));

//middleware  1
app.use((req,res,next)=>{
console.log("hello sparrow this is one middleware ");
req.myUserName = "sparrow is live ";
next();
})
//middleware 2
app.use((req,res,next )=>{
console.log("hello this is second middleware ",req.myUserName);
fs.appendFile("local.txt",`\n${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`,(err, data )=>{ next() })
});

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
  const id = Number(req.params.userid);
  const result = user.find(user=>usre.id === id);
  return res.json({status:"pending for patch"});
})
.delete((req,res)=>{
  //delete request 
  
  return res.json({status:"deleted"});

});

app.post("/api/users",(req, res)=>{
const body = req.body;
user.push({...body,id:user.length + 1});
fs.writeFile("./MOCK_DATA.json",JSON.stringify(user), (err,data )=>{
  return res.json({status:"success",id:user.length});
})
});

app.listen(port,()=>{
 console.log(`server run on ${port}`);
})