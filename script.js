//complete this code
class Person {
  name;
  age;
	constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this.name;
  }
  set() {
    return this.age;
  }
}
const person = new Person("John",30);

class Student extends Person {
  study() {
    console.log(`${name} is studying`);
  }
}
const student = new Student("John",30);
const student = new Student("Alice", 30);

class Teacher extends Person {
  teach() {
    console.log(`${name} is teaching`);
  }
}
const teacher = new Teacher("John", 30);
const teacher = new Teacher("Alice", 30);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
