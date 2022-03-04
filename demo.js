
function triangleArea(base, height) {
    return 1/2 * (base * height);
}

var area = triangleArea(5, 10);
var areaAgain = triangleArea(2, 4);
var areaFinal = triangleArea(4, 20);

function convertFeetToInches(length){
    return (length * 12);
}

var length_1 = convertFeetToInches(1)
var length_3 = convertFeetToInches(3)
var length_30 = convertFeetToInches(30)

console.log(area);
console.log(areaAgain);
console.log(areaFinal);
console.log(length_1)
console.log(length_3)
console.log(length_30)