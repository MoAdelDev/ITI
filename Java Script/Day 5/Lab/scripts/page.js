// ----------- Assignment 1 ---------------
// Get images by document methods
let images_1=document.getElementsByTagName('img');
console.log(images_1);

// Get images by default documnet collections
let images_2=document.images;
console.log(images_2);

// Get all options of city drop down list
let cities=document.getElementsByName('City')[0];
console.log(cities);

// Get all rows inside table 2
let rows = document.getElementsByTagName("table")[1].getElementsByTagName("tr");
console.log(rows);

// Get all elements that contains  class name fontBlue and BGrey
let elements_has_fontBlue_bGrey=document.getElementsByClassName('fontBlue bGrey');
console.log(elements_has_fontBlue_bGrey);


// ------------ Assignemnt 2----------------
createTrackList('Cross', document.getElementsByTagName('body')[0]);
createTrackList('Mearn', document.getElementsByTagName('body')[0]);

addCourse('JavaScript', document.getElementsByClassName('Cross')[0]);
addCourse('Flutter', document.getElementsByClassName('Cross')[0]);

addCourse('JavaScript', document.getElementsByClassName('Mearn')[0]);
addCourse('Node Js', document.getElementsByClassName('Mearn')[0]);


removeCourse('JavaScript', document.getElementsByClassName('Cross')[0]);

// -------------- Assignment 3 ------------
let image=document.getElementsByTagName('img')[0];
setInterval(()=>{
        const randomNumber = Math.floor(Math.random() * 7) + 1
        image.src=`images/${randomNumber}.jpg`;
},1000);


