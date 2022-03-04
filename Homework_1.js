// // Problem 1:

function sumOfSquareAreas(a, b){
    return ((a*a) + (b*b));
}

input_1 = sumOfSquareAreas(3, 3);
input_2 = sumOfSquareAreas(3, 8);
input_3 = sumOfSquareAreas(2, 2);

console.log(input_1)
console.log(input_2)
console.log(input_3)


// Problem 2:
function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    return ((.10 * homeworkAvg) + (.15 * quizAvg) + (.75 * examAvg))
}


input_4 = gradeCalculator(10, 10, 10);
input_5 = gradeCalculator(80, 90, 100);
input_6 = gradeCalculator(80, 70, 90);

console.log(input_4);
console.log(input_5);
console.log(input_6);