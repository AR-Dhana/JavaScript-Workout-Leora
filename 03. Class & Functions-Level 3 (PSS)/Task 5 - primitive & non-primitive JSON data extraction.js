// find primitive JSON element to push non-primitive JSON element list //
let sampleListForStudentsDetails = [{
    "student": [{ "name": "archana", "age": 17, "gender": "female", "marks": [65, 70, 66, 87, 91] },
    { "name": "dhanam", "age": 17, "gender": "female", "marks": [35, 40, 25, 50, 43] },
    { "name": "vishon", "age": 18, "gender": "male", "marks": [65, 75, 80, 83, 70] },
    { "name": "ram", "age": 17, "gender": "male", "marks": [45, 35, 35, 40, 35] },
    { "name": "yoga", "age": 17, "gender": "female", "marks": [87, 79, 83, 65, 92] },
    { "name": "anu", "age": 18, "gender": "female", "marks": [80, 88, 79, 75, 90] },
    { "name": "sneka", "age": 17, "gender": "female", "marks": [40, 47, 35, 20, 40] },
    { "name": "prema", "age": 18, "gender": "female", "marks": [35, 55, 50, 43, 35] },
    { "name": "naveen", "age": 17, "gender": "male", "marks": [35, 40, 15, 36, 50] },
    { "name": "vinoth", "age": 18, "gender": "male", "marks": [30, 40, 35, 42, 25] }]
}
];
let basicLevelPassStudents = [];
let maleEligibleStudents = [];
let femaleEligibleStudents = [];
let finalisedStudentsList=[];
for (i = 0; i < sampleListForStudentsDetails[0].student.length; i++) {
    sampleListForStudentsDetails[0].student[i].gender = sampleListForStudentsDetails[0].student[i].gender.toUpperCase();
    let tempCountForBasicPassLevel = 0;
    let avgMark = 0;
    for (j = 0; j < sampleListForStudentsDetails[0].student[i].marks.length; j++) {
        if (sampleListForStudentsDetails[0].student[i].marks[j] >= 30) {
            tempCountForBasicPassLevel = tempCountForBasicPassLevel + 1;
            avgMark = avgMark + sampleListForStudentsDetails[0].student[i].marks[j];
            if (tempCountForBasicPassLevel == 5) {
                avgMark = avgMark / 5;
                sampleListForStudentsDetails[0].student[i].avg_Mark = avgMark;
                basicLevelPassStudents.push(sampleListForStudentsDetails[0].student[i]);
            }
        }
    }
}
for (i = 0; i < basicLevelPassStudents.length; i++) {
    if ((basicLevelPassStudents[i].gender == "MALE") && (basicLevelPassStudents[i].avg_Mark >= 50)) {
        delete basicLevelPassStudents[i].marks;
        maleEligibleStudents.push(basicLevelPassStudents[i]);
    }
    else if ((basicLevelPassStudents[i].gender == "FEMALE") && (basicLevelPassStudents[i].avg_Mark >= 60)) {
        delete basicLevelPassStudents[i].marks;
        femaleEligibleStudents.push(basicLevelPassStudents[i]);
    }
    else{
        delete basicLevelPassStudents[i].marks;
    }
}
finalisedStudentsList.basicLevelPassStudents=basicLevelPassStudents;
finalisedStudentsList.femaleEligibleStudents=femaleEligibleStudents;
finalisedStudentsList.maleEligibleStudents=maleEligibleStudents;
console.log(finalisedStudentsList);