// find duplicate element in an array list using function //
let arrayWithDuplicate = [1, 0, 0, 2, 2, 5, 6, 7, 8, 8, 8];
let duplicatesOfArray = [];

function findDuplicateUsingSplice() {

    for (i = 0; i < arrayWithDuplicate.length; i++) {
        let tempDummyCount = 0;
        for (j = i + 1; j < arrayWithDuplicate.length; j++) {
            if (arrayWithDuplicate[i] == arrayWithDuplicate[j]) {
                tempDummyCount = tempDummyCount + 1;
            }
        }
        if (tempDummyCount == 1) {
            duplicatesOfArray.push(arrayWithDuplicate[i]);
        }
    }
    return (duplicatesOfArray);
}

findDuplicateUsingSplice();
console.log(duplicatesOfArray);