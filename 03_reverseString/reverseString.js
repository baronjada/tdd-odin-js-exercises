const reverseString = function (string) {
  let splitString = string.split("");
  let reversedArray = splitString.reverse();
  let joinedArray = reversedArray.join("");
  return joinedArray;
};

reverseString("Jada");

// Do not edit below this line
module.exports = reverseString;
