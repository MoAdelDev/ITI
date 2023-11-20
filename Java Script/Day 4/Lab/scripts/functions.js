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
        let number = Math.round(Math.random() * (max - min) + 1) + min;
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

const setGrades = (studentNumbers, courseNumbers) => {
    let students = [];
    for (let i = 0; i < studentNumbers; i++) {
        let grades = [];
        for (let j = 0; j < courseNumbers; j++) {
            let grade = Number(+prompt("Enter the grade of student " + (i + 1) + " of course " + (j + 1)));
            grades.push(grade);
        }
        students.push(grades);
    }
    return students;
}

const getTotalGradesForEachStudent = (students) => {
    let totalGrades = [];
    for (let i = 0; i < students.length; i++) {
        let sum = 0;
        for (let j = 0; j < students[i].length; j++) {
            sum += students[i][j];
        }
        totalGrades.push(sum);
    }
    return totalGrades;
}


const getAverageGradesForEachCourse = (students) => {
    let averageGrades = [];
    for (let i = 0; i < students.length; i++) {
        let average = 0;
        for (let j = 0; j < students[i].length; j++) {
            average += students[j][i];
        }
        averageGrades.push(Math.floor(average/3));
    }
    return averageGrades;
}
