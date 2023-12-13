let names = ['Mogammed', 'Adel', 'Abdelaziz'];

_.each(names, function(fruit) {
    let listItem = document.createElement('li');
    listItem.textContent = fruit;
    document.getElementById('names').appendChild(listItem);
});
