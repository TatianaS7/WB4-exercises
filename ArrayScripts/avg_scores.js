let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let average = 0;

function getAverage(array) {
    for (let i = 0; i < array.length; i++) {
        average += array[i]/array.length;
    }
    return average;
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));