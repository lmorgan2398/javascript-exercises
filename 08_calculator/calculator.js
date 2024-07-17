const add = function(...args) {
  let arr = [...args];
  let sum = arr.reduce((total, currentNumber) => {
              return total + currentNumber
              }, 0);
  return sum;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let summedNumbers = arr.reduce((total, currentNumber) => {
              return total + currentNumber
              }, 0);
  return summedNumbers;
};

const multiply = function(arr) {
  let sum = arr.reduce((total, currentNumber) => {
              return total * currentNumber
              });
  return sum;
};

const power = function(num, pow) {
  return num ** pow;
};

const factorial = function(num) {
  let sum = num;
  if (num === 0) {
    return 1;
  } else {
  for (i = num - 1; i > 0; i--) {
    sum *= i;
  };
  return sum;
};
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
