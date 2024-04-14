const express = require('express');
const mysql = require('mysql2');
const ejs = require('ejs'); 

const port = 3000
const app = express();

app.set('view engine','ejs');
app.set('views', './vie'); //if we change folder then use this line 

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mcalabofdbms',
    database:'student'
});
conn.connect( (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connection done with dbms");
    }
})

app.post

app.get( '/',(req,res)=>{
    const sql = 'SELECT * FROM student.student;';
    conn.query(sql,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(data);
            res.render('display',{data:data});
        }
    });
});

// app.listen(port , ()=> console.log(`server run ${port}`));
app.listen(port,(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`SERVER LISTENES  ${port}`);
    }
})
