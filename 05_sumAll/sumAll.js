const sumAll = function(firstInt, lastInt) {
    let sum = 0
        if (firstInt <= lastInt) {
            for (i = firstInt; i <= lastInt; i++) {
                sum += i;
            }
        } else { 
            for (i = firstInt; i >= lastInt; i--) {
                sum += i;
            }
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
