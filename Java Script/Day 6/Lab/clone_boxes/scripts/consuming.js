window.addEventListener('load', function(){
    let firstImageObj=document.querySelector('.first_box');
    let secondImageObj=document.querySelector('.second_box');
    let thirdImageObj=document.querySelector('.third_box');
    
    
    firstImageObj.onclick=function(){
        firstImageListener(this,firstImageObj);
    };
    secondImageObj.onclick=function(){
        secondImageListener(this,secondImageObj);
    };
    thirdImageObj.onclick=function(){
        thirdImageListener(this,thirdImageObj);
    };
});