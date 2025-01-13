class Fraction {
  constructor(fraction, remainder = true) {
    if (fraction === 0) {
      this._fraction = 0;
      this._number = 0;
      return;
    }

    if (fraction === parseInt(fraction, 10)) {
      this._fraction = 0;
      this._number = fraction;
      return;
    }
    this._fraction = parseFloat(fraction);
    this._remainder = remainder;

    this._sign = Math.sign(fraction);

    if (remainder) {
      this._number = Math.floor(Math.abs(this._fraction));
      let fixedLength = Math.abs(this._fraction).toString().length - this._number.toString().length - 1;
      console.log({fixedLength, f: this._fraction, n: this._number})
      this._fraction = (Math.abs(this._fraction) - this._number).toFixed(fixedLength);
    }

    let decimalPos = this._fraction.toString().indexOf('.');
    let len = Math.abs(this._fraction).toString().length - decimalPos - this._sign;

    this.denominator = Math.floor(Math.pow(10, len));
    this.numerator = Math.floor(Math.abs(this._fraction) * this.denominator);

    let divisor = this.gcd(this.numerator, this.denominator);

    this.numerator /= divisor;
    this.denominator /= divisor;

    if (remainder) this._number *= this._sign;
    else this.numerator *=  this._sign;
  }

  get number() {
    return (this._remainder && Object.is(this._sign, -0) ? '-' : '') + this._number;
  }

  gcd(a, b) {
    if (!b) return a;

    return this.gcd(b, Math.floor(a % b)); // Discard any fractions due to limitations in precision.
  }

  toString() {
    if (this._number === 0 && this._fraction === 0) return "0";

    if (this._remainder) {
      if (this._number !== 0)
        return this.number + ' ' + this.numerator + '/' + this.denominator;
      else
        return this.numerator * this._sign + '/' + this.denominator;
    }

    return this.numerator + '/' + this.denominator;
  }
}

const decimalToFraction = (decimalValue) => {
  const nonFractional = Math.floor(decimalValue)
  const fractionalValue = (decimalValue - nonFractional)
  const frac = new Fraction(fractionalValue);

  if (frac.toString() !== '0') {
    return `${nonFractional} ${frac.toString()}`
  } else {
    return `${nonFractional}`
  }
}


export { decimalToFraction }