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
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

