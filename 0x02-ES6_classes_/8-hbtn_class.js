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

