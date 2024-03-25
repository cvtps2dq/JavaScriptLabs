class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.personalNumber = this.calculatePersonalNumber();
    }

    calculatePersonalNumber() {
        // Вычисляем длину полного имени (включая пробелы)
        return this.fullName.length;
    }

    toString() {
        return `Name: ${this.fullName} - Personal Number: ${this.personalNumber}`;
    }
}

function assignPersonalNumbers(employees) {
    let employeesData = [];

    employees.forEach(function(employee) {
        let [firstName, lastName] = employee.split(' ');
        employeesData.push(new Employee(firstName, lastName));
    });

    employeesData.forEach(function(employee) {
        console.log(employee.toString());
    });
}

let employees = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

assignPersonalNumbers(employees);