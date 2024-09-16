//file transfer 

const fs = require("fs");

//file write 
//Sync....
// fs.writeFileSync("./test.txt","hello sparrow");

//Async....
// fs.writeFile("./testA.txt","hello new sparrow",(error)=>{});


//file read only 
// const result = fs.readFileSync("./contact.txt","utf-8");
// const result = fs.readFileSync("./contact.txt");
// console.log(result.toString());


// fs.readFile("./contact.txt",(err,result)=>{
// if(err) console.log(err);
// else console.log(result.toString());
// })

//file append 
// fs.appendFile("./contact.txt",`898989898989 \n`,(err)=>console.log(err));

// fs.readFile("./contact.txt",(err,result)=>{
// if(err) console.log(err);
// else console.log(result.toString());
// })

fs.appendFileSync("contact.txt","hello sparrow pratik pratik how are you");

// whole file copy in to new file 
// fs.copyFile("./contact.txt","./copy1.txt",(err)=>{});
// fs.copyFileSync("./contact.txt","./copy.txt");


//delete = unlink 
// fs.unlink("./copy1.txt",(err)=>{});
// fs.unlinkSync("./testA.txt");

//stat 
// console.log(fs.statSync("./test.txt"));

//create new folder 
// fs.mkdirSync("./hello");
// fs.mkdirSync("./pratik");

const os = require("os");

console.log(os.cpus().length);


