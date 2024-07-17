const findTheOldest = function(arr) {
    arr.forEach((item) => { 
        if (item.yearOfDeath) {
            item.age = (item.yearOfDeath - item.yearOfBirth);
        } else {
            let currentTime = new Date();
            let year = currentTime.getFullYear();
            item.age = (year - item.yearOfBirth);
        }
    });
    let arrByAge = arr.sort((a, b) => {
        if (a.age === b.age) {
            return 0;
        } else if (a.age > b.age) {
            return -1;
        } else if (a.age < b.age) {
            return 1;
        }
    });
    return arrByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
