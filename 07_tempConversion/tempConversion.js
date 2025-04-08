const convertToCelsius = function (farenheitTemp) {
  let celsuisCalc = (farenheitTemp - 32) * (5 / 9);
  let roundedCelsiusCalc = Number(celsuisCalc.toFixed(1));
  return roundedCelsiusCalc;
};
console.log(
  "This is a farenheit temp converted to celsius!",
  convertToCelsius(100)
);

const convertToFahrenheit = function (celsiusTemp) {
  let farenheitCalc = (celsiusTemp * 9) / 5 + 32;
  let roundedFarenheitCalc = Number(farenheitCalc.toFixed(1));
  return roundedFarenheitCalc;
};

console.log(
  "This is a celsius temp converted to farenheit!",
  convertToFahrenheit(0)
);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
