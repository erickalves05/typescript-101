class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " s " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " +  person.middleInitial + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

console.log('ha');

// document.body.innerHTML = greeter(user);