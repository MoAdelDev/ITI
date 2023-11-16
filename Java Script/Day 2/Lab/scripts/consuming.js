
// Assignment 1
let firstTeamScore = calculateAvg(50, 20, 180, 400, 200);
let secondTeamScore = calculateAvg(30, 100, 180, 200, 300);

let winnerTeam = checkWinner(firstTeamScore, secondTeamScore);

console.log(winnerTeam);

//Assignment 2
let sum=0;
for(let i=0;  i<2; i++) {
    sum+=getNumberFromUser(`Enter Number ${i+1}`);
}
console.log(`The sum is ${sum}`);

//Assignment 3
let numbersCount = getNumberFromUser('Enter numbers wish you want to sum')
console.log(`The sum is ${sumNumbers(numbersCount)}`);



