console.log("hello sparrow");

//first way to importa/ required 
// const {sum, sub} = require("./math");
// console.log(sum (10,20),sub(10,20));


// second way to import/required 
const math = require("./math");
console.log(math.sum(10,20),math.sub(10,20));




