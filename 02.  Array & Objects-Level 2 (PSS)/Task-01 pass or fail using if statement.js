let studentDetailsList = [{ "name": "arun", "class": "A", "age": 25, "gender": "male", "marks": [35, 45, 50, 30, 50] },
{ "name": "meenu", "class": "B", "age": 65, "gender": "female", "marks": [10, 20, 30, 50, 40] },
{ "name": "jeni", "class": "C", "age": 32, "gender": "female", "marks": [65, 90, 60, 85, 50] },
{ "name": "selvi", "class": "a", "age": 34, "gender": "female", "marks": [55, 90, 30, 60, 50] },
{ "name": "ammu", "class": "a", "age": 24, "gender": "female", "marks": [55, 45, 30, 60, 50] },
{ "name": "ram", "class": "c", "age": 40, "gender": "male", "marks": [70, 60, 80, 67, 50] }];
let classAResult = [];
let classBResult = [];
let classCResult = [];
let studentDetailsResult = [];
for (i = 0; i < studentDetailsList.length; i++) {
    let tempPassCount = 0;
    let tempFailCount = 0;
    let dummyFailCountAClass = 0;
    let dummyFailCountBClass = 0;
    let dummyFailCountCClass = 0;
    let totalMarks = 0;
    studentDetailsList[i].class = studentDetailsList[i].class.toUpperCase();
    studentDetailsList[i].gender = studentDetailsList[i].gender.toUpperCase();
    for (j = 0; j < studentDetailsList[i].marks.length; j++) {
        if (((studentDetailsList[i].class == "A") && (studentDetailsList[i].gender == "FEMALE") && (studentDetailsList[i].marks[j] >= 50)) || ((studentDetailsList[i].class == "A") && (studentDetailsList[i].gender == "MALE") && (studentDetailsList[i].marks[j] >= 30))) {
            tempPassCount += 1;
            totalMarks = totalMarks + studentDetailsList[i].marks[j];
            if (tempPassCount == 5) {
                let avgMarks = totalMarks / (studentDetailsList[i].marks.length);
                classAResult.push({ Name: studentDetailsList[i].name, pass_or_fail_status: true, pass_subject_count: tempPassCount, avg_of_marks: avgMarks });
            }
        }
        else if (((studentDetailsList[i].class == "A") && (studentDetailsList[i].gender == "MALE") && (studentDetailsList[i].marks[j] < 30)) || ((studentDetailsList[i].class == "A") && (studentDetailsList[i].gender == "FEMALE") && (studentDetailsList[i].marks[j] < 50))) {
            tempFailCount += 1;
            if (tempFailCount > 0) {
                dummyFailCountAClass += 1;
            }
        }
        else if (((studentDetailsList[i].class == "B") && (studentDetailsList[i].gender == "FEMALE") && (studentDetailsList[i].marks[j] >= 50)) || ((studentDetailsList[i].class == "B") && (studentDetailsList[i].gender == "MALE") && (studentDetailsList[i].marks[j] >= 30))) {
            tempPassCount += 1;
            totalMarks = totalMarks + studentDetailsList[i].marks[j];
            if (tempPassCount == 5) {
                let avgMarks = totalMarks / (studentDetailsList[i].marks.length);
                classBResult.push({ Name: studentDetailsList[i].name, pass_or_fail_status: true, pass_subject_count: tempPassCount, avg_of_marks: avgMarks });
            }
        }
        else if (((studentDetailsList[i].class == "B") && (studentDetailsList[i].gender == "MALE") && (studentDetailsList[i].marks[j] < 30)) || ((studentDetailsList[i].class == "B") && (studentDetailsList[i].gender == "FEMALE") && (studentDetailsList[i].marks[j] < 50))) {
            tempFailCount += 1;
            if (tempFailCount > 0) {
                dummyFailCountBClass += 1;
            }
        }
        else if (((studentDetailsList[i].class == "C") && (studentDetailsList[i].gender == "FEMALE") && (studentDetailsList[i].marks[j] >= 50)) || ((studentDetailsList[i].class == "C") && (studentDetailsList[i].gender == "MALE") && (studentDetailsList[i].marks[j] >= 30))) {
            tempPassCount += 1;
            totalMarks = totalMarks + studentDetailsList[i].marks[j];
            if (tempPassCount == 5) {
                let avgMarks = totalMarks / (studentDetailsList[i].marks.length);
                classCResult.push({ Name: studentDetailsList[i].name, pass_or_fail_status: true, pass_subject_count: tempPassCount, avg_of_marks: avgMarks });
            }
        }
        else if (((studentDetailsList[i].class == "C") && (studentDetailsList[i].gender == "MALE") && (studentDetailsList[i].marks[j] < 30)) || ((studentDetailsList[i].class == "C") && (studentDetailsList[i].gender == "FEMALE") && (studentDetailsList[i].marks[j] < 50))) {
            tempFailCount += 1;
            if (tempFailCount > 0) {
                dummyFailCountCClass += 1;
            }
        }
    }
    if (dummyFailCountAClass > 0) {
        classAResult.push({ Name: studentDetailsList[i].name, pass_or_fail_status: false, failed_subject_count: dummyFailCountAClass });
    }
    if (dummyFailCountBClass > 0) {
        classBResult.push({ Name: studentDetailsList[i].name, pass_or_fail_status: false, failed_subject_count: dummyFailCountBClass });
    }
    if (dummyFailCountCClass > 0) {
        classCResult.push({ Name: studentDetailsList[i].name, pass_or_fail_status: false, failed_subject_count: dummyFailCountCClass });
    }
}
studentDetailsResult.class_A_Result = classAResult;
studentDetailsResult.class_B_Result = classBResult;
studentDetailsResult.class_C_Result = classCResult;
console.log(studentDetailsResult);