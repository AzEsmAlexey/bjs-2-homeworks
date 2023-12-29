"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let arr = [];
  if (d < 0) {
    return arr;
  } else if (d === 0) {
      let x = -b / (2 * a);
      arr.push(x);
      return arr;
  } else {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      arr.push(x1, x2);
      return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let S = amount - contribution;
  let payment = S * (p + (p / (((1 + p) ** countMonths) - 1)));
  let totalAmount = payment * countMonths;
  return +totalAmount.toFixed(2);

}