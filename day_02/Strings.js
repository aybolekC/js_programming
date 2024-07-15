

let schoolName='Harvard School';

console.log(schoolName.length);
console.log(schoolName.length-1); // starts from 0

console.log(schoolName[0]);
console.log(schoolName[13]);

console.log('---------------------------------------------------------');

let newStr=schoolName.toLowerCase();


console.log(schoolName);
console.log(newStr);

schoolName=schoolName.toUpperCase();
console.log(schoolName);

console.log('---------------------------------------------------------');

let expectedText='JavaScript';

let actualText='javascript';

console.log(expectedText.toLowerCase()===actualText.toLowerCase());
console.log(expectedText);
console.log(actualText);

console.log('---------------------------------------------------------');

let s='Python Python';

// s=s.replace('Python', 'JavaScript');  want to replace both Pythons

s=s.replace(/Python/g, 'JavaScript')  // it is global flag

console.log(s);

console.log('---------------------------------------------------------');

let str='ABCDE12345EFGHI890JKLMN12345UIOYTR';
console.log(str);

str=str.replace(/\d/g, '');
console.log(str);

// str.replace(/[^a-zA-Z0-9\s]/g, '')

console.log('----------------------iterating through string-----------------------------------');

let w='JavaScript';

for (let i = 0; i < w.length; i++) {

    console.log(w[i]);
   
}

console.log('----------------------substring-----------------------------------');

let email='aya.hudayberdiyeva@gmail.com';

// let domain = email.substring(email.indexOf("@") + 1);


let fullDomain = email.substring(email.indexOf("@") + 1);
let domain = fullDomain.substring(0, fullDomain.lastIndexOf("."));

console.log(domain);

console.log('----------------------substring-----------------------------------');

let employeeName='Anna';
let employeeAge=35;

console.log('Employee name is: ' + employeeName);
console.log('Employee age is: ' + employeeAge);

console.log(`My name is ${employeeName}, and I am ${employeeAge} years old`);