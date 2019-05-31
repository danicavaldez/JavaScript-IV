// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return (`Hello my name is ${this.name}. I am from ${this.location}.`);
  }
}

const newPerson = new Person ({
  name: "Danica",
  age: 23,
  location: "Live Oak, CA"
})

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}!`;
  }
  grading(student) {
    let studentGrade = student.grade
    const randomNumber = Math.floor(Math.random() * 20)
    return `${student.name}'s grade is ${studentGrade += randomNumber}`;
  }
}

const testInstructor =  new Instructor ({
  name: "Mr. Instructor",
  age: 30,
  location: "San Francisco",
  specialty: "Back-end",
  favLanguage: "Javascript",
  catchPhrase: "Coding is cool!"
});


class Student extends Person {
  constructor(studentAttributes){
    super(studentAttributes);
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(function(favSubject) {
      console.log(favSubject);
    })
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

const testStudent = new Student ({
  name: "Alyssa",
  age: 25,
  location: "Washington",
  specialty: "back-end",
  favLanguage: "Javascript",
  catchPhrase: "My brain hurts!",
  className: "WEBPT7",
  favSubjects: ["HTML", "CSS", "Javascript"],
  grade: 42
});

class ProjectManagers extends Instructor {
  constructor(pmAttributes){
    super(pmAttributes);
    this.gradClassname = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`
  }
  debugCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

const testPM = new ProjectManagers ({
  name: "Rad PM",
  age: 30,
  location: "San Francisco",
  specialty: "Back-end",
  favLanguage: "Javascript",
  catchPhrase: "I love being a PM!",
  gradClassname: "WEB1",
  favInstructor: "Best Instructor"
});

console.log(newPerson.speak());
console.log(testInstructor.grading(testStudent));
console.log(testInstructor.demo("CSS"));
console.log(testInstructor.grade("Bob", "CSS"));
testStudent.listsSubjects();
console.log(testStudent.PRAssignment("Preprocessing II"))
console.log(testStudent.sprintChallenge("Javascript Fundamentals"));
console.log(testPM.standUp("WEBPT7_Rad PM"));
console.log(testPM.debugCode( "Billy", "JavaScript"));