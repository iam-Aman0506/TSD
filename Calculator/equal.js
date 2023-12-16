const add = require("./add");
const prod = require("./multi");
const newClass = require("./class");
const tryClass = new newClass("Venom" , 20);

console.log(add(100,50));
console.log(prod(10,50));
console.log(tryClass.name , tryClass.age);