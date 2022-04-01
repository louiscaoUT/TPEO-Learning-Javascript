// Question 1


// An Object called "Car" that returns the value of a defined Car's model, year, color, or mpg
function Car (model, year, color, mpg) {

    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;

}

// Defining 3 Car Objects and their respective arguments
var carOne = new Car("BMW", 2020, "Black", 1);
var carTwo = new Car("Mercedes", 2021, "Red", 2);   
var carThree = new Car("Porsche", 2022, "Yellow", 3);

// console.log(carOne.mpg);
// console.log(carTwo.mpg);
// console.log(carThree.mpg);


// Question 2

// Vehicle Object whose properties contain the 3 objects created in the previous question
var Vehicle = {
    
   one: {
       car: carOne
   },

   two: {
       car: carTwo
   },

   three: {
       car: carThree
   }


};

console.log(Vehicle.one.car.mpg);
console.log(Vehicle.two.car.mpg);
console.log(Vehicle.three.car.mpg);