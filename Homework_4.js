// Question 1


// An Object called "Car" that returns the value of a defined Car's model, year, color, or mpg
function Car (model, year, color, mpg) {

    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;

}

// Defining 3 Car Objects and their respective arguments
var toyataOne = new Car("Supra", 2020, "Black", 1);
var mercedesTwo = new Car("G-Wagon", 2021, "Red", 2);   
var audiThree = new Car("i8", 2022, "Yellow", 3);

console.log(toyataOne.mpg);
console.log(mercedesTwo.mpg);
console.log(audiThree.mpg);


// Question 2

// Vehicle Object whose properties contain the 3 objects created in the previous question

function Vehicle(car) {

    this.car = car;


}

var toyata = new Vehicle(toyataOne);
var mercedes = new Vehicle(mercedesTwo);
var audi = new Vehicle(audiThree);


console.log(toyata.car.mpg)
console.log(mercedes.car.mpg)
console.log(audi.car.mpg)
