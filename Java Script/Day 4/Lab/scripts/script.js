
// // Assignment 1
// let numbers=[2, 1, 3, 2, 7, 2, 8, 4, 3, 7, 10, 11, 10];

// console.table(numbers.sort((a,b)=> a-b));

// console.table(numbers.sort((a,b)=> b-a));

// let getNumbersIsLargerThan5 = filterNumbers(numbers, isLargerThan5);
// console.log(getNumbersIsLargerThan5);

// let maxNumber=getMaxNumber(numbers);
// console.log("Max Number : " + maxNumber);

// let minNumber=getMinNumber(numbers);
// console.log("Min Number : " + minNumber);

// let multipliedArray = Array.from(numbers, (item) => item*5);
// console.log("Multiplied Array : " + multipliedArray);

// // Remove Duplicates
// filterNumbers(numbers, (item, index)=>{
//     console.log(numbers.indexOf(2))
//     if(numbers.indexOf(item) === index) {
//         return true;
//     }
//     return false;
// });
// numbers = removeDuplicates(numbers);
// console.table(numbers);

// let evenNumbersCount=getEvenNumberCount(numbers);
// console.log("Even Numbers Count : " + evenNumbersCount);


// console.log(numbers.join("*"));

// // Assignment 2
// let length = Number(getInputFromUser("Enter Even Number"));
// let min = Number(+prompt("Enter min number"));
// let max = Number(+prompt("Enter max number"));

// let randomArray=getRandomriedArray(min, max, length);
// console.log("Randomarized Array : " + randomArray);

// // Assignment 3
// let arrayShuffling = suffleArray([1 , 4, 6, 7]);
// console.log(arrayShuffling);


// Assignment4
// let studentNumbers=Number(+prompt("Enter no of students"));
// let courseNumbers=Number(+prompt("Enter no of courses"));;
// let students=setGrades(studentNumbers, courseNumbers);
// console.table( students);
// let averageGradesForEachCourse=getAverageGradesForEachCourse(students);

// let averageGradesForEachStudent=getTotalGradesForEachStudent(students);

// console.log("averageGradesForEachStudent : " + averageGradesForEachStudent);
// console.log("averageGradesForEachCourse : " + averageGradesForEachCourse);

// ------- Reduce Method, it using to sum all elements of an array ----------
// let array=[1, 2, 3, 4];
// const initialValue=2;
// const sumArray=array.reduce((accumlator, currentValue)=> accumlator+currentValue,initialValue);
// console.log(sumArray);

// ----- Find method, get first element which satisfies the condition
// let array=[1, 12, 30, 4];
// const found=array.find((element)=> element>10);
// console.log(found);

// ----- findIndex method, get first element index which satisfies the condition
// let array=[1, 12, 30, 4];
// const found=array.findIndex((element)=> element>10);
// console.log(found);

// ----- Splice Method ------
let array=[1, 12, 30, 4, 5, 10];
array.splice(3,0,50,60,70,80);
console.log(array);

