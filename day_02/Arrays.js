
let elements=['James', 'Daniel', 1,2,3,4,true, false, 5.5];

console.log(elements);
console.log(elements.length);

console.log('-------------------------------------------------------');

let students=['Shay','Yulia','Nijat','Belinda'];

console.log(students);
console.log(students[0]);
console.log(students[1]);

students[2]='Breanna';
console.log(students);

console.log('-------------------------------------------------------');

let numbers=[45,55,65,76,80,90,100];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    
}

console.log('------------------------for of loop-------------------------------');
for (const iterator of numbers) {
    
    console.log(iterator);
}

console.log('------------------------for each loop from instructor-------------------------------');
for (let each of numbers) {
    
    console.log(each);
}

console.log('-------------------------------------------------------');

let employees=['Aygun', 'Musabekhon','Nasera', 'Betul'];

console.log(employees);

employees.push('Isabella');
console.log(employees);

employees.unshift('Daniel');
console.log(employees);

employees.unshift('Ahmet');
employees.unshift('Ahmet');
employees.unshift('Ahmet');
employees.unshift('Ahmet');
console.log(employees);


// I want to remove Ahmets after first Ahmet

employees.splice(1,3);
console.log(employees);

employees.shift();
console.log(employees);

employees.pop();
console.log(employees);





