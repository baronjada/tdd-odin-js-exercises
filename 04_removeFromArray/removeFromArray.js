//1.  Working function that removes single argument from array but not passing all tests

// const removeFromArray = (array, removedNumber) => {
//   let newArray = array.filter(function (number) {
//     return number !== removedNumber;
//   });
//   return newArray;
// };

// removeFromArray([1, 2, 3, 4], 3);

// 2. For loop method: v1

// let originalArray = [1, 2, 3, 4];
// let removedItem = 2;

// const removeFromArray = (array, removedItem) => {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== removedItem) {
//       newArray.push(array[i]);
//     }
//   }

//   return newArray;
// };

// let updatedArray = removeFromArray(originalArray, removedItem);

// console.log("Original array: ", originalArray);
// console.log("Updated array: ", updatedArray);

// 3. For loop method: v2 - with splice (working in console)

// let array = [1, 2, 3, 4];
// let remove = [2, 4];

// for (let i = array.length - 1; i >= 0; i--) {
//   if (remove.includes(array[i])) {
//     array.splice(i, 1);
//   }
// }

// console.log(array);

// 4. For loop method: v2 - with splice (putting into function)

// let removeFromArray = (array, remove) => {
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (remove.includes(array[i])) {
//       array.splice(i, 1);
//     }
//   }

//   return array;
// };

// removeFromArray([1, 2, 3, 4], [2, 4]);

// 4. Chat gpt resolution - passes all tests.

function removeFromArray(arr, ...args) {
  return arr.filter((item) => !args.includes(item));
}

// Example usage:
console.log(...removeFromArray([1, 2, 3, 4], 3)); // [1, 2, 4]
console.log(...removeFromArray([1, 2, 3, 4, 5], 2, 3)); // [1, 4, 5]
console.log(...removeFromArray(["a", "b", "c"], "a")); // ["b", "c"]

// Do not edit below this line
module.exports = removeFromArray;
