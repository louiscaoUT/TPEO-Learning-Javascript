// Problem One:

var parentArray = [];
var array = [];

// Car Constructor to create Car objects with specified properities
function Car(model, color, year, mpg, id) {

    this.model = model;
    this.color = color;
    this.year = year;
    this.mpg = mpg;
    this.id = id;

}

// Creates 100 new car objects with an incrementing "id" property that are then pushed into the "array" array
for (var i = 1; i <= 100; i++) {
    array.push(new Car("Supra", "Red", 1998, 1, i))
}


// Separates the Dog objects in "array" into groups of 10, which are then pushed into "parentArray"
for (var i = 0; i < array.length; i += 10) {
    parentArray.push(array.slice(i, i + 10));
}

console.log(parentArray);


// Problem Two

/* Grabs Dog objects whose ids are between the inclusive range of two numbers
The Dog objects' "color" property is then changed to blue, and the Dog objects are then pushed into the "slice" array */
function getCarsBetweenIds(idMin, idMax) {

    var slice = [];

    for (var i = 0; i < array.length; i++) {

        if (array[i].id <= idMax && array[i].id >= idMin) {

            array[i].color = "blue"
            slice.push(array[i])

        }

    } 
    
    return slice;
}

console.log(getCarsBetweenIds(10, 20));
console.log(getCarsBetweenIds(0, 35));
console.log(getCarsBetweenIds(40, 41));



