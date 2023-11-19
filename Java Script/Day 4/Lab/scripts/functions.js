const filterNumbers = function (array, conditionFunction) {
    let result = [];
    for (let i in array) {
        if (conditionFunction(array[i], i)) result.push(array[i]);
    }
    return result;
}

const isLargerThan5 = (array) => {
    if (array > 5) return true;
    return false;
}

const getMaxNumber = (numbers) => {
    let result = numbers[0];
    for (let item of numbers) {
        if (item > result) result = item;
    }
    return result;
}

const getMinNumber = (numbers) => {
    let result = numbers[0];
    for (let item of numbers) {
        if (item < result) result = item;
    }
    return result;
}

const removeDuplicates = (array) => {
    let result = [];
    for (let item of array) {
        if (!result.includes(item)) result.push(item);
    }
    return result;
}

const getEvenNumberCount = (array) => {
    let count = 0;
    for (let item of array) {
        if (item % 2 == 0) count++;
    }
    return count;
}

const getRandomriedArray = (min, max, length) => {
    let array = [];
    for (let i = 0; i < length; i += 2) {
        let number = Math.floor(Math.random() * (max - min) + 1) + min;
        array.push(number, number);
    }
    return array;
}

const isNumberLengthEvenNumber = (value) => {
    if (value % 2 == 0) {
        return true
    }
    return false;
}

const getInputFromUser = (msg) => {
    let value;
    do {
        value = prompt(msg);
    } while (!isNumberLengthEvenNumber(value));
    return value;
}

const suffleArray = (array) => {
    let result = array;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return result;
}
