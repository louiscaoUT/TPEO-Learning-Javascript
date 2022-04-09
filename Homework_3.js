// Problem 1:

// A function that prints out powers of 3 up until the 9th power, also prints a string when my favorite power of 3 prints 
function powersOfThree() { 
    var count = 9
    var startCount = 3
    
    for (var i = 0; i <= count; i++) {
        var result = startCount ** i;
        console.log(result);
        
        if (i == 1) {
           console.log("This is my favorite power of three!")
            
        }
    }
    

}

var timeIDpowersOfThree = setTimeout(powersOfThree, 3000) 

// Problem 2:

function everyTenSeconds() {
    console.log("Hello World!");
}

var intervalID = setInterval(everyTenSeconds, 10000);
    
function clearingInterval() {
    clearInterval(intervalID);
}

// After 2 minutes has has passed, the function "everyTenSeconds" will stop looping
setTimeout(clearingInterval, 120000, intervalID);
