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

