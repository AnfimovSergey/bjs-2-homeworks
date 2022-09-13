"use strict";
function  (a, b, c)  {
  let x1, x2, disc = Math.pow(b,2)-4*a*c;
  let arr = [];

  if  (disc < 0) return arr;

  if  (disc > 0) {
    x2 = (b*(-1) + Math.sqrt(disc))/2*a;
    arr.push(x2);
  }
  x1 = (b*(-1) - Math.sqrt(disc))/2*a;
  arr.push(x1);

  return arr;
}










function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
