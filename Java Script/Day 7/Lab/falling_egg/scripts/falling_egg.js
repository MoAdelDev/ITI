window.addEventListener('load', function(){
    let imageObject= document.querySelector('#egg');


    let basketImgObj=document.querySelector('#egg_falled');
    moveDown(imageObject, basketImgObj);

    this.document.addEventListener('keydown', function(event){
        moveBasket(basketImgObj, event.key);
    });
});