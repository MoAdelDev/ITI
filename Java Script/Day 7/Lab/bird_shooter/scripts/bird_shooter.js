window.addEventListener('load',function(){
    let birdImgObj=document.querySelector("#bird");
    moveRight(birdImgObj, 0);

    this.document.onclick=function(event){
        shootBird(birdImgObj, event.x, event.y);
    }
});