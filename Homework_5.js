// Problem 1
// a function that reverses any string input
function reverse(string) {
    return string.split("").reverse().join("");
}

console.log(reverse("We"));
console.log(reverse("Hate"));
console.log(reverse("JavaScript"));

// Problem 2
// Counts the number of vowels in a string and returns that number

function numVowels(string) {
    var vowels = ["a","e","i","o","u"];
    count = 0;
    string = string.toLowerCase();
    
    for (var i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) > -1) {
            count += 1;
        }
    }

    return count;

}

console.log(numVowels("I"));
console.log(numVowels("Hate"));
console.log(numVowels("Coding"));

// Problem 3
// function that returns the number of string in an array that have a length less than a predetermined length

function numStringsShorterThanLength(string, length) {

    count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i].length < length) {
            count += 1
        }
    }
    return count

}

arrayOne = ["I", "Hate", "Coding"];
arrayTwo = ["JavaScript", "Blows", "Hot", "Cock"];
arrayThree = ["Data", "Structures", "And", "Algorthims", "Is", "Way", "too", "Hard"];

console.log(numStringsShorterThanLength(arrayOne, 0));
console.log(numStringsShorterThanLength(arrayTwo, 4));
console.log(numStringsShorterThanLength(arrayThree, 100));







