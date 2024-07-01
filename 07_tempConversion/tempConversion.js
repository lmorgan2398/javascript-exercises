const convertToCelsius = function(farenheitToConvert) {
  let celsiusConverted;
  celsiusConverted = ((farenheitToConvert - 32) * (5 / 9));
  let celsiusConvertedRounded = +(celsiusConverted.toFixed(1));
  return celsiusConvertedRounded;
};

const convertToFahrenheit = function(celsiusToConvert) {
  let farenheitConverted;
  farenheitConverted = (celsiusToConvert * (9 / 5) + 32);
  let farenheitConvertedRounded = +(farenheitConverted.toFixed(1));
  return farenheitConvertedRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
