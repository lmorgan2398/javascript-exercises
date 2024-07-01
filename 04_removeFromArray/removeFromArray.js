const removeFromArray = function(...args) {
    let arr = Array.from(args);
    let stringInput = arr[0];
    let stringOutput = stringInput.slice();
    let toRemove = arr.slice(1);
    for (i = 0; i < stringInput.length; i++) {
        for (j = 0; j < toRemove.length; j++) {
            if (stringInput[i] === toRemove[j]) { 
                stringOutput.splice(stringOutput.indexOf(stringInput[i]), 1); 
                }
            }
        }
    return stringOutput
    }

// Do not edit below this line
module.exports = removeFromArray;
