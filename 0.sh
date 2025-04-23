#!/usr/bin/env bash

# Create the base directory
mkdir -p 0x02-ES6_classes
cd 0x02-ES6_classes || exit

# Create README.md
cat << EOF > README.md
# 0x02. ES6 Classes

This project contains exercises for learning about ES6 Classes in JavaScript (ECMAScript 2015).

## Tasks

* **0. You used to attend a place like this at some point:** Implement \`ClassRoom\` class.
* **1. Let's make some classrooms:** Implement \`initializeRooms\` function.
* **2. A Course, Getters, and Setters:** Implement \`ALXCourse\` class with getters/setters and type validation.
* **3. Methods, static methods, computed methods names..... MONEY:** Implement \`Currency\` class.
* **4. Pricing:** Implement \`Pricing\` class using \`Currency\`.
* **5. A Building:** Implement abstract-like \`Building\` class.
* **6. Inheritance:** Implement \`SkyHighBuilding\` extending \`Building\`.
* **7. Airport:** Implement \`Airport\` class with custom string description.
* **8. Primitive - ÅLX Class:** Implement \`ALXClass\` with custom primitive casting.
* **9. Hoisting:** Fix provided code with hoisting issues.
* **10. Vroom:** Implement \`Car\` class with a \`cloneCar\` method.
* **11. EVCar:** Implement \`EVCar\` extending \`Car\` with modified clone behavior.

## Requirements

* Ubuntu 18.04 LTS
* NodeJS 12.11.x
* Editors: vi, vim, emacs, VSCode
* Files end with a new line
* Code uses \`.js\` extension
* Tested with Jest (\`npm run test\`)
* Linted with ESLint (\`npm run lint\`)
* Passes \`npm run full-test\`

## Setup

1.  Install NodeJS 12.11.x:
    \`\`\`bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v
    npm -v
    \`\`\`
2.  Install Dev Dependencies:
    \`\`\`bash
    # Place package.json, babel.config.js, .eslintrc.js in the project root
    npm install
    \`\`\`

EOF

# Task 0: 0-classroom.js
cat << EOF > 0-classroom.js
export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number') {
      throw new TypeError('maxStudentsSize must be a number');
    }
    this._maxStudentsSize = maxStudentsSize;
  }
}

EOF

# Task 1: 1-make_classrooms.js
cat << EOF > 1-make_classrooms.js
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const roomSizes = [19, 20, 34];
  return roomSizes.map((size) => new ClassRoom(size));
}

EOF

# Task 2: 2-hbtn_course.js
cat << EOF > 2-hbtn_course.js
export default class ALXCourse {
  constructor(name, length, students) {
    this.name = name; // Use setter for validation
    this.length = length; // Use setter for validation
    this.students = students; // Use setter for validation
  }

  // Name getter and setter
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Length getter and setter
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Students getter and setter
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}

EOF

# Task 3: 3-currency.js
cat << EOF > 3-currency.js
export default class Currency {
  constructor(code, name) {
    this.code = code; // Use setter
    this.name = name; // Use setter
  }

  // Code getter and setter
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Name getter and setter
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method to display full currency format
  displayFullCurrency() {
    return \`\${this.name} (\${this.code})\`;
  }
}

EOF

# Task 4: 4-pricing.js
cat << EOF > 4-pricing.js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount; // Use setter
    this.currency = currency; // Use setter
  }

  // Amount getter and setter
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Currency getter and setter
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  // Method to display full price format
  displayFullPrice() {
    return \`\${this.amount} \${this.currency.name} (\${this.currency.code})\`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

EOF

# Task 5: 5-building.js
cat << EOF > 5-building.js
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;

    // Enforce implementation of evacuationWarningMessage in subclasses
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // sqft getter
  get sqft() {
    return this._sqft;
  }

  // Abstract method placeholder (optional, error is thrown in constructor)
  // evacuationWarningMessage() {
  //   throw new Error("Method 'evacuationWarningMessage' must be implemented.");
  // }
}

EOF

# Task 6: 6-sky_high.js
cat << EOF > 6-sky_high.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call parent constructor for sqft
    this.floors = floors; // Use setter
  }

  // Floors getter and setter
  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = newFloors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return \`Evacuate slowly the \${this.floors} floors\`;
  }
}

EOF

# Task 7: 7-airport.js
cat << EOF > 7-airport.js
export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override the default string description using Symbol.toStringTag
  get [Symbol.toStringTag]() {
    return this._code;
  }

  // Alternatively, override toString() - but the example suggests Symbol.toStringTag
  // toString() {
  //   return \`[object \${this._code}]\`;
  // }
}

EOF

# Task 8: 8-hbtn_class.js
cat << EOF > 8-hbtn_class.js
export default class ALXClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Custom primitive casting behavior
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    // Default case (could be string or number depending on context)
    // Let's default to string representation here or number based on typical use.
    // The examples specifically test Number() and String(), so handling those hints is sufficient.
    return this.location; // Default to location string if hint is 'default' or unknown
  }
}

EOF

# Task 9: 9-hoisting.js
cat << EOF > 9-hoisting.js
// Define classes before they are used

export class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentALX {
  constructor(firstName, lastName, alxClass) { // Added alxClass parameter
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass; // Assign parameter to internal property
  }

  get fullName() {
    return \`\${this._firstName} \${this._lastName}\`;
  }

  get alxClass() {
    return this._alxClass; // Return the internal property
  }

  get fullStudentDescription() {
    // Use 'this' instead of 'self'
    return \`\${this._firstName} \${this._lastName} - \${this._alxClass.year} - \${this._alxClass.location}\`;
  }
}

// Instantiate classes *after* they are defined
const class2019 = new ALXClass(2019, 'San Francisco');
const class2020 = new ALXClass(2020, 'San Francisco');

const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('Collle', 'Sibanda', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);

// Export the list of students
export const listOfStudents = [student1, student2, student3, student4, student5];

// Also export default if needed, or just the named export as required
export default listOfStudents; // Assuming default export might be expected by tests

EOF

# Task 10: 10-car.js
cat << EOF > 10-car.js
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getters (optional, but good practice)
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // Method to clone the car - returns a new instance of the *same* class
  // The example output implies the new object Sibandas not copy properties.
  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    return new Species();
    // Alternative based strictly on output (less flexible):
    // return new this.constructor();
  }
}

EOF

# Task 11: 100-evcar.js
cat << EOF > 100-evcar.js
import Car from './10-car.js';

// Symbol to ensure cloneCar returns a Car instance even when called on EVCar
// This step is actually handled by overriding cloneCar below directly.
// const cloneSymbol = Symbol('clone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call parent constructor
    this._range = range;
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override cloneCar to specifically return a Car instance
  cloneCar() {
    // Directly create a new Car instance, ignoring the EVCar type
    // The example output shows undefined properties, so we don't pass args.
    const Species = super.constructor[Symbol.species] || Car; // Ensure it's Car
    return new Species();
    // Simpler based on output: return new Car();
  }
}

EOF

# Go back to the parent directory
cd ..

echo "Bash script finished. Files created in 0x02-ES6_classes directory."