const moveDown=(eggObject, basketObject,scoreObj)=>{
    let top=0;
    // set egg properties
    setEggPropertie(eggObject);
    // move egg
    let id=setInterval(()=>{
        top+=20;
        checkEggIsFalledInBasketOrNot(eggObject, basketObject);
        if(top<window.innerHeight-eggObject.height){
            eggObject.style.top=top+"px";
        }
        else
        {
            // The egg falled on ground
            clearInterval(id);
            if(checkEggIsFalledInBasketOrNot(eggObject, basketObject)) {
                // The egg is falled in Basket
                incScore(scoreObj, true);
                // Hide egg
                eggObject.classList.add('hide');
                setTimeout(() => {
                    moveDown(eggObject, basketObject, scoreObj);
                }, 1000);
            }
            else{
                // Change egg image
                setTimeout(()=>{
                    eggObject.setAttribute('src', 'images/egg_falled.png');
                    setTimeout(() => {
                        moveDown(eggObject, basketObject, scoreObj);
                    }, 1500);
                }, 1000);
            } 
        }
   },100);
}

const setEggPropertie=(eggObject)=>{
    // set egg image to image element
    eggObject.setAttribute('src', 'images/egg.png');
    // show egg image
    eggObject.classList.remove('hide');
    // make egg every time to fall from randomarized position
    let number = Math.round(Math.random() * (window.innerWidth-60 - 10) + 1) + 10;
    eggObject.style.left=number+"px";
}
const moveBasket=(baseketObject, key)=>{
    let moveDistance=Math.ceil(baseketObject.getBoundingClientRect().left);
    if(key=='ArrowRight'){
        if((moveDistance<window.innerWidth-baseketObject.width)){
            moveDistance+=20; 
            baseketObject.style.left=moveDistance+"px";
        }       
    }
    else if(key=='ArrowLeft'){
        moveDistance-=20;
        if(baseketObject.x>0){
            baseketObject.style.left=moveDistance+"px";
        }
    }
}

const incScore=(scoreObj, isFalledInBasket)=>{
    console.log(scoreObj);
    let score = parseInt(scoreObj.textContent);
    if(isFalledInBasket) score++;
    scoreObj.innerText=score;
}
const checkEggIsFalledInBasketOrNot=(eggObject, basketObject)=>{
    console.log(eggObject.getBoundingClientRect().right- basketObject.getBoundingClientRect().left);
    let eggObjectBottom=eggObject.getBoundingClientRect().bottom;
    let basketObjectTop=basketObject.getBoundingClientRect().top;
    let eggObjectRight=eggObject.getBoundingClientRect().right;
    let baseketObjectRight=basketObject.getBoundingClientRect().right;
    let eggObjectLeft=eggObject.getBoundingClientRect().left;
    let basketObjectLeft=basketObject.getBoundingClientRect().left;
    if(eggObjectBottom>=basketObjectTop
    && (eggObjectRight- basketObjectLeft)>=0
    && (eggObjectLeft- baseketObjectRight)<=0
    ){
        return true;
    }
    return false;
}