README.md is present

Score (0 points): 
task_0/js/main.ts is present

Score (0 points): 
task_0/js/main.ts contains the declaration of the interface Student:

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
Score (1 point): 0 
task_0/js/main.ts contains the declaration of studentsList which is an array of Student with 2 instances of it inside

Score (1 point): 0 
task_0/js/main.ts contains the creation in VanillaJS a <table> with each Student information per line (<tr>)

Score (1 point): 0 
npm run build is not reporting any errors

Score (1 point): 0 
npm run start-dev run the server and when open in the browser, a table with 2 lines and all students information is present

Score (1 point): 0 
Additional comment2000
1. Let's build a Teacher interface
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
fullTimeEmployee(boolean) this attribute should always be defined
yearsOfExperience(number) this attribute is optional
location(string) this attribute should always be defined
Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
Example:

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
Files in Github:
task_1/js/main.ts: Tando Mjekula
task_1/webpack.config.js: Tando Mjekula
task_1/tsconfig.json: Tando Mjekula
task_1/package.json: Tando Mjekula
task_1/js/main.ts exists

Score (0 points): 
task_1/js/main.ts contains the definition of Teacher interface:

export interface Teacher {
...
}
Score (1 point): 0 
Teacher interface has firstName and lastName as readonly:

export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  ...
Score (1 point): 0 
Teacher interface has fullTimeEmployee and location mandatory

export interface Teacher {
  fullTimeEmployee: boolean;
  location: string;
  ...
Score (1 point): 0 
Teacher interface has yearsOfExperience optional

export interface Teacher {
  yearsOfExperience?: number;
  ...
Score (1 point): 0 
Teacher interface can allow any other kind of attributes:

export interface Teacher {
  [propName: string]: any;
  ...
Score (1 point): 0 
No error when npm run build

Score (1 point): 0 
Additional comment2000
2. Extending the Teacher class
Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

Example:

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
Files in Github:
task_1/js/main.ts: Tando Mjekula
task_1/js/main.ts exists

Score (0 points): 
task_1/js/main.ts contains an interface Directors that extends Teacher

Score (1 point): 0 
Directors interface has a new mandatory attribute numberOfReports(number)

Score (1 point): 0 
Additional comment2000
3. Printing teachers
Write a function printTeacher:

It accepts two arguments firstName and lastName
It returns the first letter of the firstName and the full lastName
Example: printTeacher("John", "Doe") -> J. Doe
Write an interface for the function named printTeacherFunction.

Files in Github:
task_1/js/main.ts: Tando Mjekula
task_1/js/main.ts exists

Score (0 points): 
task_1/js/main.ts contains the function printTeacher

Score (1 point): 0 
The function printTeacher accepts 2 string attributes: firstName and lastName

Score (1 point): 0 
The function printTeacher returns a new string based on the firstName and lastName: the first letter of the firstName and the full lastName

Score (1 point): 0 
No error when run npm run build

Score (1 point): 0 
Additional comment2000
4. Writing a class
Write a Class named StudentClass:

The constructor accepts firstName(string) and lastName(string) arguments
The class has a method named workOnHomework that return the string Currently working
The class has a method named displayName. It returns the firstName of the student
The constructor of the class should be described through an Interface
The class should be described through an Interface
Requirements:

You can reuse the Webpack configuration from the previous exercise to compile the code.
When running npm run build, no TypeScript error should be displayed.
Every variable should use TypeScript when possible.
Files in Github:
task_1/js/main.ts: Tando Mjekula
task_1/js/main.ts exists

Score (0 points): 
task_1/js/main.ts contains a class definition StudentClass

Score (1 point): 0 
StudentClass has a constructor accepting firstName (string) and lastName (string)

Score (1 point): 0 
StudentClass has the function workOnHomework that returns a string “Currently working”

Score (1 point): 0 
StudentClass has the function displayName that returns the firstName initialized in the constructor

Score (1 point): 0 
The constructor of the class should be described through an Interface:

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}
Score (1 point): 0 
The class should be described through an Interface:

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}
Score (1 point): 0 
No error when run npm run build

Score (1 point): 0 
Additional comment2000
5. Advanced types Part 1
Create the DirectorInterface interface with the 3 expected methods:

workFromHome() returning a string
getCoffeeBreak() returning a string
workDirectorTasks() returning a string
Create the TeacherInterface interface with the 3 expected methods:

workFromHome() returning a string
getCoffeeBreak() returning a string
workTeacherTasks() returning a string
Create a class Director that will implement DirectorInterface

workFromHome should return the string Working from home
getToWork should return the string Getting a coffee break
workDirectorTasks should return the string Getting to director tasks
Create a class Teacher that will implement TeacherInterface

workFromHome should return the string Cannot work from home
getCoffeeBreak should return the string Cannot have a break
workTeacherTasks should return the string Getting to work
Create a function createEmployee with the following requirements:

It can return either a Director or a Teacher instance
It accepts 1 arguments:
salary(either number or string)
if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
Expected result:

console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
Files in Github:
task_2/js/main.ts: Tando Mjekula
task_2/webpack.config.js: Tando Mjekula
task_2/tsconfig.json: Tando Mjekula
task_2/package.json: Tando Mjekula
task_2/js/main.ts exists

Score (0 points): 
task_2/js/main.ts contains the interface DirectorInterface with correct methods:

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
Score (1 point): 0 
task_2/js/main.ts contains the interface TeacherInterface with correct methods:

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
Score (1 point): 0 
task_2/js/main.ts contains the class Director that will implement DirectorInterface:

export const Director = class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}
Score (1 point): 0 
task_2/js/main.ts contains the class Teacher that will implement TeacherInterface:

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

Score (1 point): 0 
task_2/js/main.ts contains the function createEmployee:

export function createEmployee(firstName: string, lastName: string, salary: number | string): DirectorInterface | TeacherInterface {
  if (salary < 500) {
    return new Teacher();
  }

  return new Director();
}

Score (1 point): 0 
No error when run npm run build

Score (1 point): 0 
Additional comment2000
6. Creating functions specific to employees
Write a function isDirector:

it accepts employee as an argument
it will be used as a type predicate and if the employee is a director
Write a function executeWork:

it accepts employee as an argument
if the employee is a Director, it will call workDirectorTasks
if the employee is a Teacher, it will call workTeacherTasks
Expected result:

executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
Files in Github:
task_2/js/main.ts: Tando Mjekula
task_2/js/main.ts exists

Score (0 points): 
task_2/js/main.ts contains the function isDirector:

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}
Score (1 point): 0 
task_2/js/main.ts contains the function executeWork:

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if(isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
Score (1 point): 0 
No errors when run npm run build

Score (1 point): 0 
Additional comment2000
7. String literal types
Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:

it takes todayClass as an argument
it will return the string Teaching Math if todayClass is Math
it will return the string Teaching History if todayClass is History
Expected result:

teachClass('Math');
Teaching Math
teachClass('History');
Teaching History
Files in Github:
task_2/js/main.ts: Tando Mjekula
task_2/js/main.ts exists

Score (0 points): 
task_2/js/main.ts contains the string literal Subjects with correct value:

export type Subjects = 'Math' | 'History';
Score (1 point): 0 
task_2/js/main.ts contains the function teachClass:

export function teachClass(todayClass:Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math'
  } else if (todayClass === 'History') {
    return 'Teaching History'
  }
}
Score (1 point): 0 
No errors when run npm run build

Score (1 point): 0 
Additional comment2000
8. Ambient Namespaces
Create a directory called task_3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.

The first part of will require that you build an interface and a type. Inside a file named interface.ts:

Create a type RowID and set it equal to number
Create an interface RowElement that contains these 3 fields:
firstName: string
lastName: string
age?: number
You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called crud.js. Copy this file into the task_3/js directory.

Here it is

export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
Write an ambient file within task_3/js, named crud.d.ts containing the type declarations for each crud function. At the top of the file import RowID and RowElement from interface.ts.

In main.ts

At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
Import the rowID type and rowElement from interface.ts
Import everything from crud.js as CRUD
Create an object called row with the type RowElement with the fields set to these values:

firstName: Guillaume
lastName: Salva
Create a const variable named newRowID with the type RowID and assign the value the insertRow command.

Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23

Finally, call the updateRow and deleteRow commands.

Expected result:

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
Requirements:

When running npm run build, no TypeScript error should be displayed.
Every variable should use TypeScript when possible.
The main file and the ambient file should both import the types defined in the interface file.
You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.
Files in Github:
task_3/js/main.ts: Tando Mjekula
task_3/js/interface.ts: Tando Mjekula
task_3/js/crud.d.ts: Tando Mjekula
task_3/js/main.ts, task_3/js/interface.ts and task_3/js/crud.d.ts exist

Score (0 points): 
task_3/js/interface.ts contains a new type RowID:

export type RowID = number;
Score (1 point): 0 
task_3/js/interface.ts contains the interface RowElement:

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
Score (1 point): 0 
task_3/js/crud.d.ts contains the 3 functions definition of crud.js but by using RowElement and RowID:

import { RowID, RowElement } from './interface';

export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): number;
Score (1 point): 0 
task_3/js/main.ts contains an object called row of type RowElement

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};
Score (1 point): 0 
task_3/js/main.ts contains a variable newRowID (of type RowID) initialized with the function insertRow:

const newRowID: RowID = CRUD.insertRow(row);
Score (1 point): 0 
task_3/js/main.ts contains a variable updatedRow (of type RowElement) with an update of row with an age field set to 23:

const updatedRow: RowElement = { ...row, age: 23 };
Score (1 point): 0 
task_3/js/main.ts contains a call to updateRow on newRowID and updatedRow:

CRUD.updateRow(newRowID, updatedRow);
Score (1 point): 0 
task_3/js/main.ts contains a call to deleteRow on newRowID:

CRUD.deleteRow(newRowID);
Score (1 point): 0 
No errors when run npm run build

Score (1 point): 0 
Additional comment2000
9. Namespace & Declaration merging
Create a new directory task_4 and copy the above tsconfig.json and put this package.json in there

{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
In task_4/js/subjects:

Create a file Teacher.ts and write a Teacher interface in a namespace named Subjects.

the interface requires firstName and lastName as string
Create a file Subject.ts and write a Subject class in the same namespace named Subjects.

the class has one attribute teacher that implements the Teacher interface
the class has one setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)
Create a file Cpp.ts and make the following modifications in the same namespace.

Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
Create a class Cpp extending from Subject
Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
Create a file React.ts and write a React Class in the same namespace.

Add a new attribute experienceTeachingReact? (number) to the Teacher interface
In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
Create a file Java.ts and write a Java Class in the same namespace.

Add a new attribute experienceTeachingJava? (number) to the Teacher interface
In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
Files in Github:
task_4/package.json: Tando Mjekula
task_4/tsconfig.json: Tando Mjekula
task_4/js/subjects/Cpp.ts: Tando Mjekula
task_4/js/subjects/Java.ts: Tando Mjekula
task_4/js/subjects/React.ts: Tando Mjekula
task_4/js/subjects/Subject.ts: Tando Mjekula
task_4/js/subjects/Teacher.ts: Tando Mjekula
task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts and task_4/js/subjects/Teacher.ts are present

Score (0 points): 
task_4/js/subjects/Teacher.ts contains the interface Teacher:

namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}
Score (1 point): 0 
task_4/js/subjects/Subject.ts contains the interface Subject:

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }
  }
}
Score (1 point): 0 
task_4/js/subjects/Cpp.ts uses the declaration merging for adding a new optional attribute experienceTeachingC (number) to the Teacher interface:

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
    ...
Score (1 point): 0 
task_4/js/subjects/Cpp.ts contains the class Cpp that extends Subject:

namespace Subjects {
...

  export class Cpp extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingC > 0) {
        return 'Available Teacher: ' + this.teacher.firstName;
      } else {
        return 'No available teacher';
      }
    }
  }
}
Score (1 point): 0 
task_4/js/subjects/React.ts uses the declaration merging for adding a new optional attribute experienceTeachingReact (number) to the Teacher interface:

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
    ...
Score (1 point): 0 
task_4/js/subjects/React.ts contains the class React that extends Subject:

namespace Subjects {
...
  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return 'Available Teacher: '+ this.teacher.firstName;
      } else {
        return 'No available teacher';
      }
    }
  }
}
Score (1 point): 0 
task_4/js/subjects/Java.ts uses the declaration merging for adding a new optional attribute experienceTeachingReact (number) to the Teacher interface:

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
    ...
Score (1 point): 0 
task_4/js/subjects/Java.ts contains the class Java that extends Subject:

namespace Subjects {
...
  export class Java extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingJava > 0) {
        return 'Available Teacher: ' + this.teacher.firstName;
      } else {
        return 'No available teacher'
      }
    }
  }
}
Score (1 point): 0 
No errors when run npm run build

Score (1 point): 0 
Additional comment2000
10. Update task_4/js/main.ts
create and export a constant cpp for Cpp Subjects
create and export a constant java for Java Subjects
create and export a constant react for React Subjects
create and export one Teacher object cTeacher with experienceTeachingC = 10
for Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher and print the strings they return
for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
for React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
Files in Github:
task_4/js/main.ts: Tando Mjekula
task_4/js/main.ts exists

Score (0 points): 
task_4/js/main.ts contains a constant cpp for the Cpp class:

Score (1 point): 0 
task_4/js/main.ts contains a constant java for the Java class:

Score (1 point): 0 
task_4/js/main.ts contains a constant react for the React class:

Score (1 point): 0 
task_4/js/main.ts contains a constant cTeacher for the Teacher class with experienceTeachingC = 10:

const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
}
Score (1 point): 0 
task_4/js/main.ts contains these tests: for Cpp subject, log to the console “C++”, set cTeacher as the teacher of cpp, call the two methods getRequirements and getAvailableTeacher and print the strings they return

Score (1 point): 0 
task_4/js/main.ts contains these tests: for Java subject, log to the console “Java, set cTeacher as the teacher of java, call the two methods getRequirements and getAvailableTeacher and print the strings they return

Score (1 point): 0 
task_4/js/main.ts contains these tests: for React subject, log to the console “React”, set cTeacher as the teacher of react, call the two methods getRequirements and getAvailableTeacher and print the strings they return

Score (1 point): 0 
No errors when run npm run build

Score (1 point): 0 
Additional comment2000
11. Brand convention & Nominal typing
Create a directory task_5 and copy these configuration files into the root of task_5: package.json, tsconfig.json, webpack.config.js

Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:

Each interface defines a number named credits
Add a brand property to each interface in order to uniquely identify each of them
Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:

Each function takes two arguments subject1 and subject2
sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
Each function sums the credits of the two subjects
Files in Github:
task_5/js/main.ts: Tando Mjekula
task_5/package.json: Tando Mjekula
task_5/webpack.config.js: Tando Mjekula
task_5/tsconfig.json: Tando Mjekula
task_5/js/main.ts exists

Score (0 points): 
task_5/js/main.ts contains the interface MajorCredits:

export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}
Score (1 point): 0 
task_5/js/main.ts contains the interface MinorCredits:

export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}
Score (1 point): 0 
task_5/js/main.ts contains the function sumMajorCredits:

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}
Score (1 point): 0 
task_5/js/main.ts contains the function sumMinorCredits:

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
Score (1 point): 0 
No errors when run npm run build

Score (1 point): 0
