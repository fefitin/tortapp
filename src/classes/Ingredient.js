const Fraction = require('fraction.js');

class Ingredient {
  //This catches fractions: 1/2, 1 1/2, 1 y 1/2
  static regex = new RegExp('([0-9/., y]+)(.+)');
  
  constructor(text) {
    this.value = text;
  }

  get value() {
    return this._value;
  }

  get extra() {
    return this._extra;
  }

  get text() {
    return this._text;
  }

  set value(text) {
    try {
      const matches = text.match(Ingredient.regex);
      if(matches) {
        this._value = Fraction(matches[1].trim().replace(/y/ig, '')).valueOf();
        this._extra = matches[2];
        this._text = text;
      }
    } catch(err) {
      console.error(err);
    }
  }

  set extra(extra) {
    this._extra = extra
  }

  set text(text) {
    this._text = text;
  }

  textToRatio(ratio) {
    return `${Math.round(this._value*ratio)} ${this._extra}`;
  }

}

export default Ingredient;