const moveRight = (imageObject, left) => {
    let id = setInterval(() => {
        left += 10;

        if (left < (window.innerWidth - imageObject.width))
            imageObject.style.left = left + "px";
        else {
            clearInterval(id);
            imageObject.classList.add("flip");
            moveLeft(imageObject, left);
        }
    }, 50);
}

const moveLeft = (imageObject, left) => {
    let id = setInterval(() => {
        left -= 10;
        if (left >= 0)
            imageObject.style.left = left + "px";
        else {
            clearInterval(id);
            imageObject.classList.remove("flip");
            moveRight(imageObject, left);
        }

    }, 50);
}

const shootBird=(birdImageObj, x, y)=>{
    let birdImgObjLeft = birdImageObj.getBoundingClientRect().left;
    let birdImgObjRight = birdImageObj.getBoundingClientRect().right;
    let birdImgObjBottom = birdImageObj.getBoundingClientRect().bottom;
    let birdImgObjTop = birdImageObj.getBoundingClientRect().top;
    
    if(x>=birdImgObjLeft && x<=birdImgObjRight 
        && y<=birdImgObjBottom && y>=birdImgObjTop) {
            birdImageObj.classList.add('hide');
    }

}