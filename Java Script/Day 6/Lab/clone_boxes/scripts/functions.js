const firstImageListener = function (child, firstImageObj) {
    console.log(child)
    let parentObject = document.querySelector('#parent_div');
    parentObject.append(child.cloneNode(true));
    firstImageObj.onclick=null;
    firstImageObj = document.querySelectorAll('.first_box')[document.querySelectorAll('.first_box').length - 1];
    firstImageObj.onclick = function(){
        firstImageListener(this,firstImageObj);
    }
    return firstImageObj;
}

const secondImageListener = function (child, secondImageObj) {
    console.log(child)
    let parentObject = document.querySelector('#parent_div');
    parentObject.append(child.cloneNode(true));
    secondImageObj.onclick=null;
    secondImageObj = document.querySelectorAll('.second_box')[document.querySelectorAll('.second_box').length - 1];
    secondImageObj.onclick = function(){
        secondImageListener(this,secondImageObj);
    }
    return secondImageObj;
}

const thirdImageListener = function (child, thirdImageObj) {
    console.log(child)
    let parentObject = document.querySelector('#parent_div');
    parentObject.append(child.cloneNode(true));
    thirdImageObj.onclick=null;
    thirdImageObj = document.querySelectorAll('.third_box')[document.querySelectorAll('.third_box').length - 1];
    thirdImageObj.onclick = function(){
        thirdImageListener(this,thirdImageObj);
    }
    return thirdImageObj;
}