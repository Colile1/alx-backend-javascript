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
  // The example output implies the new object does not copy properties.
  cloneCar() {
    const Species = this.constructor[Symbol.species] || this.constructor;
    return new Species();
    // Alternative based strictly on output (less flexible):
    // return new this.constructor();
  }
}

