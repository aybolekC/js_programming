

// 1. Difference - Variable name can not be duplicated

let school='test';
console.log(school);

// let school='MIT';
// console.log(school);

console.log('===========================================');


// 2. Difference - When we declare with let scope of the variable will be within the block
// If we declare with var, then scope of the variable will be global

if(true){
    let a=200;
}

// console.log(a);

console.log('===========================================');
// 3. Difference - var variable name can be duplicated during the decleration

var country='Japan';
var country='Korea';

console.log(country);

if(true){
    a=300;
}

console.log(a); //var can NEVER be local

