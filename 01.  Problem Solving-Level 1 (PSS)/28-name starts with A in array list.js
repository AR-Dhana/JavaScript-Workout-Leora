let studentNames = ["Arul", "Ashok", "Bala", "Aasha", "Charlie", "David", "DuraiRaj"]
let result = [];
for (i = 0; i < studentNames.length; i++) {
    if (studentNames[i].startsWith("A")) {
        console.log(studentNames[i]);
        result.push(studentNames[i]);
    }
}
// console.log(studentNames);
console.log(result);