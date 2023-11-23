window.addEventListener('load', function(){
    let imageObject= document.querySelector('#egg');
    let basketImgObj=document.querySelector('#egg_falled');
    let scoreObj=this.document.querySelector('#score');
    moveDown(imageObject, basketImgObj, scoreObj);
    
    this.document.addEventListener('keydown', function(event){
        moveBasket(basketImgObj, event.key);
    });
});