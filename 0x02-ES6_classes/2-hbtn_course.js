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

