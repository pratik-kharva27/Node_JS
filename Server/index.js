
const http = require("http");
const fs = require("fs");
const port = 8000;
const url = require("url");

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.method}  ${req.url} this is visit date \n`;

    const myurl = url.parse(req.url,true);


    if(req.url === "/favicon.ico") return res.end();
    fs.appendFile("./testServer.txt",log,(err, data)=>{
        switch(myurl.pathname){
            case "/":
                if(req.method === 'GET' ) res.end("you are in home page ")
                // res.end("this is home pages");
            break;
            case "/about":
                const username = myurl.query.myname;
                res.end(`hello ${username}`);
            break;
            case "/signup":
                if(req.method === 'GET') res.end("you are in signup page");
                else if (req.method === 'POST') res.end("sucess fully done ");
            break;
            default:
                res.end("404 page not found");
        }
    });
   
}).listen(port,()=>{console.log("server is start!!")});
    