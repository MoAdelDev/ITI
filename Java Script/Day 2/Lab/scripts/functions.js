function calculateAvg(){
    var sum =0;
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum/arguments.length;
};

const checkWinner = (firstTeamScore, secondTeamScore) => {
    if (firstTeamScore > secondTeamScore) {
        return "The team 1 won";
    }
    else if (firstTeamScore < secondTeamScore) {
        return "The team 2 won";
    }
    else {
        return "The both teams tied";
    }
}

const isNumber = (value) => {
    if (!Number.isNaN(value) && value != 0) {
        return true;
    }
    return false;
}

const getNumberFromUser =(msg)=>{
    let number;
    do{
        number=+prompt(msg);
    }while(!isNumber(number));
    return number;
}
const sumNumbers = (numbersCount) => {
    let sum = 0;
    var num;
    for (let i = 1; i <= numbersCount; i++) {
        num = getNumberFromUser(`Enter Number ${i}`)
        sum +=num;
    }
    return sum;
}




// Test 1
// printValues(1, 2);
// let value4 =90;
// function printValues(value1, value2, value3, value4=3, value5=6){
//     for(let i=0; i<arguments.length; i++) {
//         console.log(`value ${i+1}: ${arguments[i]}`);
//     }
//     console.log(value4);
//     console.log(value5);
// }