// Problem One:

var parentArray = [];
var array = [];


function Car(model, color, year, mpg, id) {

    this.model = model;
    this.color = color;
    this.year = year;
    this.mpg = mpg;
    this.id = id;

}


for (var i = 1; i <= 100; i++) {
    array.push(new Car("Supra", "Red", 1998, 1, i))
}



for (var i = 0; i < array.length; i += 10) {
    parentArray.push(array.slice(i, i + 10));
}

// console.log(parentArray);


// Problem Two

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

// console.log(getCarsBetweenIds(10, 20));
// console.log(getCarsBetweenIds(0, 35));
// console.log(getCarsBetweenIds(40, 41));
console.log(parentArray[1][1])



