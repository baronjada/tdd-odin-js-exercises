// const sumAll = function (num1, num2) {
//   let sum = 0;

//   const startingNum = Math.min(num1, num2);
//   const endingNum = Math.max(num1, num2);

//   console.log("beginning of function", sum);

//   for (let i = startingNum; i <= endingNum; i++) {
//     sum += i;
//     console.log(sum);
//   }
//   return sum;
// };

// console.log("total returned by function", sumAll(10, 1));

const sumAll = function (num1, num2) {
  let sum = 0;

  const startingNum = Math.min(num1, num2);
  const endingNum = Math.max(num1, num2);

  console.log("smallest number", startingNum);
  console.log("largest number", endingNum);

  //Test case: if function parameters are integers
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  } else {
    if (startingNum < 0 || endingNum < 0) {
      //Test case: minus numbers
      return "ERROR";
      //Test case: decimal numbers
    } else if (startingNum % 1 !== 0 || endingNum % 1 !== 0) {
      return "ERROR";
    } else {
      for (let i = startingNum; i <= endingNum; i++) {
        sum += i;
      }
      return sum;
    }
  }
};

console.log("output from sumAll function", sumAll(5, 10));
console.log("output from sumAll function", sumAll(4, 1));
console.log("output from sumAll function", sumAll(-5, 10));
console.log("output from sumAll function", sumAll(5.5, 10));
console.log("output from sumAll function", sumAll("Jada", 10));

// Do not edit below this line
module.exports = sumAll;
