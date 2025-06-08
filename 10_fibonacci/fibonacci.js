function fibonacci(num) {
  const fibArray = [1, 1];

  const intNum = parseInt(num);

  if (intNum === 0) {
    return 0;
  }

  if (intNum < 0) {
    return "OOPS";
  }

  for (let i = 2; i < intNum; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  console.log(fibArray);

  return fibArray[intNum - 1];
}

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
