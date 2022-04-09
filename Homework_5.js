// Problem 1
// a function that reverses any string input
function reverse(string) {
    return string.split("").reverse().join("");
}

console.log(reverse("We"));
console.log(reverse("Hate"));
console.log(reverse("JavaScript"));

// Problem 2
// Counts the number of total vowels in a string and returns that number

function numVowels(string) {
    var vowels = ["a","e","i","o","u"];
    var count = 0;
    string = string.toLowerCase();
    
    for (var i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) > -1) {
            count += 1;
        }
    }

    return count;

}

// Derivative of the above function but it doesn't count # of total vowels (i.e. duplicates), it only counts the # of unique vowels
function numVowelsNoDuplicates(string) {
    var count = 0
    var vowels = ["a","e","i","o","u"];
    var vowelHolder = [];
    string = string.toLowerCase();

    for (var i = 0; i < string.length; i++) {
        if ((vowels.indexOf(string[i]) != -1) && (vowelHolder.indexOf(string[i]) == -1)) {
            count +=1;
            vowelHolder += string[i];
        }
        else {
            continue;
        }
    }

    return count;

}

console.log(numVowels("I"));
console.log(numVowels("Hate"));
console.log(numVowels("Coding in JavaScript"));

console.log(numVowelsNoDuplicates("I"));
console.log(numVowelsNoDuplicates("Hate"));
console.log(numVowelsNoDuplicates("Coding in JavaScript"));


// Problem 3
// function that returns the number of strings in an array that have a length less than a predetermined length

function numStringsShorterThanLength(string, length) {

    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i].length < length) {
            count += 1
        }
    }
    return count

}

var arrayOne = ["I", "Hate", "Coding"];
var arrayTwo = ["JavaScript", "Blows", "Hot", "Cock"];
var arrayThree = ["Data", "Structures", "And", "Algorithms", "Are", "Way", "Too", "Hard"];

console.log(numStringsShorterThanLength(arrayOne, 0));
console.log(numStringsShorterThanLength(arrayTwo, 4));
console.log(numStringsShorterThanLength(arrayThree, 100));







