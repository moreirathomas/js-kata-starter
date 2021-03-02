import { Fraction, addFractions } from "./fraction";

it("Should correctly add two fractions", function () {
  const f1 = new Fraction(1, 2);
  const f2 = new Fraction(1, 4);

  expect(f1.add(f2)).toEqual({ numerator: 6, denominator: 8 });
});

it("Should correctly reduce a fraction", function () {
  const f1 = new Fraction(50, 100);

  expect(f1.reduce()).toEqual({ numerator: 1, denominator: 2 });
});

it("Should correctly add two fractions and reduce the result", function () {
  const f1 = new Fraction(1, 5);
  const f2 = new Fraction(1, 5);

  expect(f1.addAndReduce(f2)).toEqual({ numerator: 2, denominator: 5 });
});

it("Should correctly add more than 2 fractions", function () {
  const f1 = new Fraction(1, 5);
  const f2 = new Fraction(1, 5);
  const f3 = new Fraction(1, 5);
  expect(addFractions(f1, f2, f3)).toEqual({ numerator: 3, denominator: 5 });
});
