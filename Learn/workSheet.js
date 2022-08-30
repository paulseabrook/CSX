////////

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    increment(number) {
        this.age += number;
        return this.age;
    }
}

let student1 = new Student("Mark Johnson", 12);

console.log(student1.name);
console.log(student1.age);

student1.increment(1);

console.log(student1.age);

student1.increment(2);

console.log(student1.age);

console.log(student1.increment(1)); // this works because within our increment method, we are returning this.age;
