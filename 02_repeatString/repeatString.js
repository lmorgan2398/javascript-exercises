const repeatString = function(string, num) {
    let newString;
    if (num === 0) {
        newString = '';
    } else if (num < 0) {
        newString = 'ERROR';
    } else {
        newString = string;
        for (i = 1; i < (Math.floor(num)); i++) {
            newString += string;
        }
    }
    return newString;
};
// Do not edit below this line
module.exports = repeatString;
