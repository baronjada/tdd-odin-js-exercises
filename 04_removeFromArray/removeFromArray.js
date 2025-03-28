// Working function that removes single argument from array but not passing all tests

const removeFromArray = (array, removedNumber) => {
  let newArray = array.filter(function (number) {
    return number !== removedNumber;
  });
  return newArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
