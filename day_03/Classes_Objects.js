
/*
create a class named Employee with the following requirements:
    attributes:
        employeeName, age, gender, salary

    methods:
        constructor: to initialize the attributes
        work: to display the employee's details
        */
       
class Employee {


    //create a static method to print that emplyee is working
    static printEmployeeIsWorking() {
        console.log('Employee is working...');
    }



    //set default values for attributes
    constructor(employeeName = 'Unknown', age = 0, gender = 'Unknown', salary = 0) {
    // constructor(employeeName, age, gender, salary) {
        this.employeeName = employeeName;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }
    
    work() {
        console.log(`Name: ${this.employeeName}, Age: ${this.age}, Gender: ${this.gender}, Salary: ${this.salary}`);
    }

    //create toString method to display employee details
    toString() {
        return `Employee Name: ${this.employeeName}, Age: ${this.age}, Gender: ${this.gender}, Salary: ${this.salary}`;
    }
}

    // create an instance of Employee with random details
    let employee = new Employee('John Doe', 30, 'Male', 5000);
    console.log(employee);

    //create an instance of the Employee class with name detail only
    let employee2 = new Employee('hello');
    console.log(employee2);

    //create an instance of the Employee with no parameters
    let employee3 = new Employee();
    console.log(employee3);

    employee.work();
    employee2.work();

Employee.printEmployeeIsWorking(); // static method call