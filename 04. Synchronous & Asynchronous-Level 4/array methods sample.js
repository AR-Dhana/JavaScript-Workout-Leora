// const arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: "undefined" },
//   ];

//   let invalidEntries = 0;

//   function filterByID(item) {
//     if (Number.isFinite(item.id) && item.id !==0) {
//       return true;
//     }
//     invalidEntries++;
//     return false;
//   }

//   const arrByID = arr.filter(filterByID);

//   console.log("Filtered Array\n", arrByID);
//   // Filtered Array
//   // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

//   console.log("Number of Invalid Entries = ", invalidEntries);
//   // Number of Invalid Entries = 5


// Modifying each word
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
    //   arr[index + 1] += " extra";
    // word += " 123";
    arr[index]+= '1258'
    arr[index +1] += ' 1589'
    return word.length < 25;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
    arr.push('');
    return word.length < 6;
});

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
});

console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]
