const repeatString = function (string, repeatNumber) {
  let result = "";

  if (repeatNumber < 0) {
    result = "ERROR";
  } else {
    for (let i = 0; i < repeatNumber; i++) {
      result += string;
    }
  }

  return result;
};

repeatString("hey", 4);

// Do not edit below this line
module.exports = repeatString;
