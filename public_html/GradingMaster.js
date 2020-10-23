/* 
 * initialize an arry with a set of 5 test scores
 * calculate the average score
 * display the grade according to the following scale:
 *      90+ = A
 *      80-89 = B
 *      70-79 = C
 *      60-69 = D
 *      <60 = F
 *      
 * BONUS: Get scores from the user instead of initializing them in the program
 */
let gradeScores = [55, 65, 75, 85, 95]; 

let addedScores = 0;

for (index = 0; index < gradeScores.length; index++) {
    addedScores = gradeScores[index] + addedScores;
}

let averageScore = addedScores/gradeScores.length;

let aGrade;

if (averageScore >= 90) {
    aGrade = "A";
} else if (averageScore >= 80) {
    aGrade = "B";
} else if (averageScore >= 70) {
    aGrade = "C";
} else if (averageScore >= 60) {
    aGrade = "D";
} else {
    aGrade = "F";
}

document.write(aGrade);




