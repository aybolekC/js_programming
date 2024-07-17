

function greetings(){

    console.log('Hello Programmers');
    console.log('Hello Aya!');
    console.log('Hello World!');

}

greetings();

console.log('Task Completed Successfully');

console.log('------------------------------------------------------------------------------------');

function displayValue(value='Unknown value'){

    console.log(`The value is ${value}`);
}

displayValue(100);
displayValue('JavaScript');
displayValue();

console.log('------------------------------------------------------------------------------------');

function square(number){
    let result=number*number;
    return result;
}

let num=square(5);
console.log(num);