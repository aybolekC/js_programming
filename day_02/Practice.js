//create an array of String and add 10 student names to it  

let students = ["John", "Jane", "Mike", "Emily", "Sarah", "David", "Michael", "Sarah", "Jessica", "Michael"];

//print the array

console.log(students);

//set the first student name to 'Aya' in students array

students[0] = "Aya";

//print the updated array

console.log(students);

//add a new student name to the end of students array

students.push("Alex");

//print the updated array

console.log(students);

//set the last student name to 'Bella' in students array

students[students.length - 1] = "Bella";

//print the updated array

console.log(students);

console.log('-----------------------------------------------------------------------------------------');

//display all the elements of the array in reversed order

for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
}

console.log('-----------------------------------------------------------------------------------------');

let email='aya27@gmail.com';

//check if the email address contains @gmail.com

if(email.includes("@gmail.com")){
    console.log("Email address is valid");
} else {
    console.log("Email address is invalid");
}

console.log('-----------------------------------------------------------------------------------------');

//create an array of integers and add 7 numbers to it

let numbers = [1, 2, 3, 4, 5, 6, 7];

//print the array

console.log(numbers);

//use for of loop to print each element of the array

for (const number of numbers) {
    console.log(number);
}

console.log('-----------------------------------------------------------------------------------------');

//write the program that can display the maximum and the minimum numbers from the numbers array

console.log("Maximum number: ", Math.max(...numbers));
console.log("Minimum number: ", Math.min(...numbers));

console.log('-----------------------------------------------------------------------------------------');

//create an array of integers and add 10 numbers to it and the array is unsorted

let unsortedNumbers = [5, 2, 8, 1, 9, 6, 7, 4, 3, 0];

//write a program that can sort the unsortedNumbers array in ascending order without using any built-in sorting functions

console.log("Unsorted numbers: ", unsortedNumbers);

for (let i = 0; i < unsortedNumbers.length+1; i++) {
    for (let j = 0; j < unsortedNumbers.length - i - 1; j++) {
        if (unsortedNumbers[j] > unsortedNumbers[j + 1]) {
            let temp = unsortedNumbers[j];
            unsortedNumbers[j] = unsortedNumbers[j + 1];
            unsortedNumbers[j + 1] = temp;
        }
    }
}

console.log("Sorted numbers: ", unsortedNumbers);

console.log('-----------------------------------------------------------------------------------------');


