// Problem 1:

// Function prints to the terminal all multiples of 3 up until 30
function countUpwardsByThree() {
    var count = 30;
    for (var i = 0; i <= count; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
countUpwardsByThree();


// Problem 2:

// Function returns a string if the argument passed is equal to the "favoriteNumber" variable
function guessMyFavoriteNumber(guess) {
    var favoriteNumber = 3
    if (guess == favoriteNumber) {
        console.log("You guessed my favorite number!");
    }
    else {
        console.log("Try again!")
    }   
}

guessMyFavoriteNumber(1);
guessMyFavoriteNumber(2);
guessMyFavoriteNumber(3);
guessMyFavoriteNumber(4);
guessMyFavoriteNumber(5);

// Problem 3:

// Prints out the name of the day that corresponds to that day's weekday number
function convertNumberToDay(number) {
    
    switch(number) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Could not find a day")
    }
}

convertNumberToDay(0);
convertNumberToDay(1);
convertNumberToDay(2);
convertNumberToDay(3);
convertNumberToDay(4);
convertNumberToDay(5);
convertNumberToDay(6);

