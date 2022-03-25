// Question 1:

function powersOfThree() { // A function that prints out powers of 3 up until the 9th power
    count = 9
    startCount = 3
    
    for (var i = 0; i <= count; i++) {
        result = startCount ** i;
        console.log(result);
        
        if (i == 1) {
           console.log("This is my favorite power of three!")
            
        }
    }
    

}

var timeIDpowersOfThree = setTimeout(powersOfThree, 3000)

// Question 2

function everyTenSeconds() {
    console.log("Hello World!");
}

function clearingInterval() {
    clearInterval(intervalID);
}

var intervalID = setInterval(everyTenSeconds, 10000);
setTimeout(clearingInterval, 120000, intervalID);
