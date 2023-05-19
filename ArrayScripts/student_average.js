let average = 0;

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
    ];

    function studentAverage(array) {
    for (let i = 0; i < array.length; i++) {  // students array - outer loop
        let sum = 0; // initialize the sum variable (total score)
        for (let j = 0; j < array[i].scores.length; j++) { // scores array - inner loop
            sum += array[i].scores[j]; //adds up the scores (j) of each student array (i) to sum variable
        }
        average = sum / array[i].scores.length; // calculates sum divided by length of scores array
        console.log(`${array[i].name}: ${average.toFixed(2)}`);
    }
}

studentAverage(students);
