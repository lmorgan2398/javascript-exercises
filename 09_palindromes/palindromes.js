const palindromes = function (str) {
    let strCharacters = Array.from(str.split(''));
    let strLetters = strCharacters.filter((character) => character !== ' ' && 
        character !== '.' &&
        character !== ',' &&
        character !== '!' &&
        character !== '?' );
    let strLettersLowerCase = strLetters.map((letter) => letter.toLowerCase())
    let strLettersLowerCaseReversed = strLettersLowerCase.slice().reverse();
    if (strLettersLowerCase.join() === strLettersLowerCaseReversed.join()) {
        return true;
    } else { return false;}
};

// Do not edit below this line
module.exports = palindromes;
