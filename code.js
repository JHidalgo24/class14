$(document).ready(
    $("#submitButton").on("click",GradeAdd),
    $("#sortByName").on("click",SortName),
    $("#sortGrade").on("click",SortGrades)
);
let grade1 = {
    firstName:"Joe",
    lastName:"Smith",
    points:12,
    gradeLetter:"F"
}
let grade2 = {
    firstName:"Will",
    lastName:"Smith",
    points:100,
    gradeLetter:"A"
}
let grade3 = {
    firstName:"Kevin",
    lastName:"Malone",
    points:36,
    gradeLetter:"F"
}

let allGrades = [grade1,grade2,grade3];

function GradeAdd(event) {
    event.preventDefault()
    let fNameVal = $('#fName').val();
    let lNameVal = $('#lName').val();
    let pointsEarned = parseFloat($('#pointsEarned').val());
    let pointsPossible = parseFloat($('#pointsPossible').val());
    let percentMade = (pointsEarned/pointsPossible)*100;
    let letterGrade;
    if(percentMade>=90){
        letterGrade = "A"
    }
    else if(percentMade >=80){
        letterGrade = "B"
    }
    else if(percentMade >=70){
        letterGrade = "C"
    }
    else if(percentMade >=60){
        letterGrade = "D"
    }
    else if(percentMade >=0){
        letterGrade = "F"
    }


    let grade = {
        firstName:fNameVal,
        lastName:lNameVal,
        points:percentMade,
        gradeLetter:letterGrade
    }

    allGrades.push(grade)

    $("p#outputValues").empty();

    for (let gradeVals of allGrades) {
        let prettyPrint = `${gradeVals.firstName} ${gradeVals.lastName} ${gradeVals.points} ${gradeVals.gradeLetter} <br>`
        $('#outputValues').append(prettyPrint)
    }

}

function SortName(event) {
    event.preventDefault()
    function sortNamesFunction(a,b) {
        if (a.firstName < b.firstName)
            return -1;
        else if (a.firstName > b.firstName)
            return 1;
        else
            return 0;
    }

    allGrades.sort(sortNamesFunction)

    $("p#outputValues").empty();

    for (let gradeVals of allGrades) {
        let prettyPrint = `${gradeVals.firstName} ${gradeVals.lastName} ${gradeVals.points} ${gradeVals.gradeLetter} <br>`
        $('#outputValues').append(prettyPrint)
    }



}

function SortGrades(event) {
    event.preventDefault()
    function sortGradesFunction(a,b) {
        if (a.points > b.points)
            return -1;
        else if (a.points < b.points)
            return 1;
        else
            return 0;
    }

    allGrades.sort(sortGradesFunction)


    $("p#outputValues").empty();

    for (let gradeVals of allGrades) {
        let prettyPrint = `${gradeVals.firstName} ${gradeVals.lastName} ${gradeVals.points} ${gradeVals.gradeLetter} <br>`
        $('#outputValues').append(prettyPrint)
    }



}


