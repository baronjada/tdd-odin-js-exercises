const add = function (num1, num2) {
  return num1 + num2;
};

console.log("add", add(5, 10));

const subtract = function (num1, num2) {
  return num1 - num2;
};

console.log("subtract", subtract(100, 10));

const sum = function (arr) {
  let total = arr.reduce((accum, num) => {
    accum += num;
    return accum;
  }, 0);

  return total;
};

console.log("sum", sum([3, 4, 13]));

const multiply = function (arr) {
  for (let i = 0; i <= arr.length; i++) {
    let total = arr.reduce((accum, num) => {
      accum = accum * num;
      return accum;
    });
    return total;
  }
};

console.log("multiply", multiply([2, 4, 10]));

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

console.log("power", power(4, 3));

const factorial = function (num) {
  if (num === 0) return 1;

  let numArr = [];

  for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }

  return multiplyNumArrItems(numArr);

  function multiplyNumArrItems(arr) {
    let factorialNum = arr.reduce((accum, arrItem) => {
      accum = accum * arrItem;
      return accum;
    });

    return factorialNum;
  }
};

console.log("factorial", factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
