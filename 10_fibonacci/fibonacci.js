const fibonacci = function(num) {
    let lastNum = 0;
    let currentNum = 1;
    if (num >= 0) {
        for (i = 0; i < num; i++) {
            let newNum = currentNum + lastNum;
            lastNum = currentNum;
            currentNum = newNum;
        }
    } else {lastNum = 'OOPS'}
    return lastNum;
};

// Do not edit below this line
module.exports = fibonacci;
