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
    return `${this.name} (${this.code})`;
  }
}

