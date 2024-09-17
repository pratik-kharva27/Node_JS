const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res)=>{
    return res.send("hello sparrow this is home page ");
})

app.get('/contact',(req,res)=>{
    return res.send("hello this is contact page ");
})

// pass in url ( http://localhost:3000/about?name=sparrow&userid=10 )
app.get('/about',(req,res)=>{
    return res.send("this is about page" + " hey " + req.query.name+ " user id is "+req.query.userid);
})

app.listen(port, ()=>{
    console.log(`hello sparrow in listen http://localhsot:${port}`);
})