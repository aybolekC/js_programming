
//create a Person class with the following requirements: 
//attribute: name, age, gender

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat(){
        console.log(`${this.name} is eating.`);
    }
}

//create a Student class that extends the Person class and has the following additional attributes:

class Student extends Person {
    constructor(name, age, gender, studentId) {
        super(name, age, gender);
        this.studentId = studentId;
    }

    study(){
        console.log(`${this.name} is studying.`);
    }

 
}

//create a Teacher class which is extending Person class

class Teacher extends Person {

    teach(){
        console.log(`${this.name} is teaching.`);
    }

}

let student= new Student('John Doe', 20, 'Male','A01');
let teacher=new Teacher('Mary Doe', 30, 'Female');

console.log(student);
console.log(teacher);

student.eat();
teacher.eat();

student.study();
teacher.teach();
