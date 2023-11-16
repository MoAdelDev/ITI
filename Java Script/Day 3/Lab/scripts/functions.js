const convertWordToPascalCase = (fullName = '') => {
    return fullName.replace(
        /\w\S*/g,
        function (txt) {
            // Make first character to Uppercase and remaining character to lowercase  
            return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
        }
    );
}
const isWordCorrect = (value) => {
    if (value != '') {
        return true
    }
    return false;
}

const getInputFromUser = (msg) => {
    let value;
    do {
        value = prompt(msg);
    } while (!isWordCorrect(value));
    return value;
}


const getLongestWordFromSentence = (value = '') => {
    var wordSplit = value.split(' ');
    var longestWord = '';
    var length = 0;
    for (var i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i].length > length) {
            length = wordSplit[i].length;
            longestWord = wordSplit[i];
        }
    }
    return longestWord;
}

const sortAnyWordToAlphapaticalOrder = (word) => {
    var wordSplit = word.split("").sort();
    var finalWord = '';
    for (var i = 0; i < wordSplit.length; i++) {
        finalWord += wordSplit[i];
    }
    return finalWord;
}

const getMonthName=(year, month, day)=>{
    let date = new Date(year,month-1,day);
    const monthName=date.toLocaleString('default', {month:"long"});
    return monthName;
}
const getRandomNumber = (numbers) => {
    var number = Math.floor(Math.random() * 11);
    // check if repeated
    while (numbers.includes(number)) {
        // Create another random number
        number = Math.floor(Math.random() * 11);
    }
    return number;
}
const createRandomNumbers = () => {
    let randomNumbers = [];
    var randomNumber;
    for (var i = 0; i < 5; i++) {
        randomNumber=getRandomNumber(randomNumbers);
        // Push random number to array
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
