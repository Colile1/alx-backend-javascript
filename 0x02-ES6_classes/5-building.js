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

