
// Assignment 1
let numbers=[2, 1, 3, 2, 7, 2, 8, 4, 3, 7, 10, 11, 10];

console.table(numbers.sort((a,b)=> a-b));

console.table(numbers.sort((a,b)=> b-a));

let getNumbersIsLargerThan5 = filterNumbers(numbers, isLargerThan5)
console.log(getNumbersIsLargerThan5);

let maxNumber=getMaxNumber(numbers);
console.log("Max Number : " + maxNumber);

let minNumber=getMinNumber(numbers);
console.log("Min Number : " + minNumber);

let multipliedArray = Array.from(numbers, (item) => item*5);
console.log("Multiplied Array : " + multipliedArray);

// Remove Duplicates
filterNumbers(numbers, (item, index)=>{
    console.log(numbers.indexOf(2))
    if(numbers.indexOf(item) === index) {
        return true;
    }
    return false;
});
numbers = removeDuplicates(numbers);
console.table(numbers);

let evenNumbersCount=getEvenNumberCount(numbers);
console.log("Even Numbers Count : " + evenNumbersCount);


console.log(numbers.toString().split("").join("*"));

// Assignment 2
let length = Number(getInputFromUser("Enter Even Number"));
let min = Number(+prompt("Enter min number"));
let max = Number(+prompt("Enter max number"));

let randomArray=getRandomriedArray(min, max, length);
console.log("Randomarized Array : " + randomArray);

// Assignment 3
let arrayShuffling = suffleArray([1 , 4, 6, 7]);
console.log(arrayShuffling);


// Assignment4


