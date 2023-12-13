let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let numbersMap = _.map(numbers, function(number) {
    return number + number;
});

_.each(numbersMap, function(numbers) {
    let listItem = document.createElement('li');
    listItem.textContent = numbers;
    document.getElementById('numbers').appendChild(listItem);
});
