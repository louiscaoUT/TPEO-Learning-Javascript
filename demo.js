function Exam(questionsCorrect, totalQuestions) {

    this.questionsCorrect = questionsCorrect;
    this.totalQuestions = totalQuestions; 

}

var examList = [];
var questionsCorrect = [15, 25, 18, 20, 12, 6, 18, 21, 9];
var totalQuestions = 25;


for (var i = 0; i < questionsCorrect.length; i++) {

    examList.push(new Exam(questionsCorrect[i], totalQuestions));

}

for (var i = 0; i < examList.length; i++) {

    var currentExam = examList[i];
    examList[i].grade = examList[i].questionsCorrect / totalQuestions * 100;
    examList[i] = currentExam;

}

var average = 0;

for (var i = 0; i < examList.length; i++) {
    average += examList[i].grade;

}

average /= examList.length;
console.log(average);