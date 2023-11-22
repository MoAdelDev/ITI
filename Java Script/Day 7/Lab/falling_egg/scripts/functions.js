const moveDown=(imageObject, basketObject)=>{
    let top=0;
    let number = Math.round(Math.random() * (window.innerWidth-50 - 5) + 1) + 5;
    imageObject.style.left=number+"px";
    let id=setInterval(()=>{
        top+=20;
        checkEggIsFalledInBoxOrNot(imageObject, basketObject);

        if(top<window.innerHeight-imageObject.height){
            imageObject.style.top=top+"px";
        }
        else
        {
            clearInterval(id);
            imageObject.setAttribute('src', 'images/egg_falled.png');
        }
   },100);

}

const moveBasket=(baseketObject, key)=>{
    let moveDistance=Math.ceil(baseketObject.getBoundingClientRect().left);
    if(key=='ArrowRight'){
        if((moveDistance<window.innerWidth-baseketObject.width)){
            moveDistance+=10; 
            baseketObject.style.left=moveDistance+"px";
        }       
    }
    else if(key=='ArrowLeft'){
        moveDistance-=10;
        if(baseketObject.x>0){
            baseketObject.style.left=moveDistance+"px";
        }
    }
}

const checkEggIsFalledInBoxOrNot=(eggObject, basketObject)=>{
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
        eggObject.classList.add('hide');
    }
}