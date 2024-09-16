//module create  custom



//first way to exports 

// const sum = (a,b) =>{
//     return a + b;
// }
// const sub = (a,b)=>{
//     return a - b;
// }
// module.exports = { sum, sub};



//second way to exports anoniyamus function 
exports.sum = (a,b)=> a+b;
exports.sub = (a,b)=> a-b;