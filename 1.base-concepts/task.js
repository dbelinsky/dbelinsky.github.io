"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-4*a*c;
  let x1, x2;
  if (d < 0 ) {
    console.log('корней нет')
  }
  else if (D === 0) {
    x1 = -b/(2*a);
    console.log ('один корень')
  }
  else is (D > 0) {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    console.log('два корня')
    arr.push(x);
    arr.push(x1);
  }
  return arr;
  console.log(arr);
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  percent = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const monthlyInstallment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  const totalAmount = (monthlyInstallment * countMonths);
  return totalAmount === 0 ? console.log(totalAmount.toFixed(0)) : console.log(totalAmount.toFixed(2));
}