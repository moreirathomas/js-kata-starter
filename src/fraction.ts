import { gcd } from "./util/util";

export class Fraction {
  constructor(public numerator: number, public denominator: number) {
    if (denominator === 0) throw new Error("fraction denominator cannot be zero");
  }

  /**
   * Mutliplies the current fraction by a scalar and returns the result.
   */
  multiply(quantity: number): Fraction {
    return new Fraction(this.numerator * quantity, this.denominator * quantity);
  }

  /**
   * Divides the current fraction by a scalar and returns the result.
   */
  divide(quantity: number): Fraction {
    return new Fraction(this.numerator / quantity, this.denominator / quantity);
  }

  /**
   * Returns the current fraction as an irreductible fraction.
   */
  reduce(): Fraction {
    return this.divide(gcd(this.numerator, this.denominator));
  }

  /**
   * Sums the given fraction to the current one and returns the result.
   */
  add(other: Fraction): Fraction {
    const current = this.multiply(other.denominator);
    const otherone = other.multiply(this.denominator);
    return new Fraction(current.numerator + otherone.numerator, current.denominator);
  }

  /**
   * Sums the given fraction to the current one and returns the result as an irreductible fraction.
   */
  addAndReduce(other: Fraction): Fraction {
    return this.add(other).reduce();
  }
}

export function addFractions(...fractions: Fraction[]): Fraction {
  return fractions.reduce((acc, curr) => (acc = acc.add(curr))).reduce();
}
