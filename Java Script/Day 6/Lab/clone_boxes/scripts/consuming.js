window.addEventListener('load', function(){
    let firstImageObj=document.querySelector('.first_box');
    let secondImageObj=document.querySelector('.second_box');
    let thirdImageObj=document.querySelector('.third_box');
    let parentObject = document.querySelector('#parent_div');

    firstImageObj.onclick=function(){
        cloneBoxByClassName(this, '.first_box', parentObject);
    };
    secondImageObj.onclick=function(){
        cloneBoxByClassName(this, '.second_box', parentObject);
    };
    thirdImageObj.onclick=function(){
        cloneBoxByClassName(this, '.third_box', parentObject);
    };
});